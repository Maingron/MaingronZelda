var midiPlayer = {};


function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
} 


if(soundtrack) {
    soundtrack = playsoundtrack;
} else {
    var soundtrack = playsoundtrack;
}

function playsoundtrack(startstop, which) {
    if(startstop == "start") {
        if(midiPlayer.isplaying) {
            stopPlaying();
        }
        window.setTimeout(function() {
            startPlaying(which);
        },50)
        midiPlayer.isplaying = 1;

    } else if(startstop == "stop") {
        stopPlaying();
        midiPlayer.isplaying = 0;
    }
}


function CircularAudioBuffer(slots) {
    slots = slots || 24;
    // number of buffers
    this.slots = slots;
    this.buffers = new Array(slots);
    
    this.reset();
    
    for (i = 0; i < this.slots; i++) {
        var buffer = audioCtx.createBuffer(channels, BUFFER, SAMPLE_RATE);
        this.buffers[i] = buffer;
    }
}

// pseudo empty all buffers
CircularAudioBuffer.prototype.reset = function () {
    this.used = 0;
    this.filled = 0;
};

// returns number of buffers that are filled
CircularAudioBuffer.prototype.filledBuffers = function () {
    var fills = this.filled - this.used;
    if (fills < 0) fills += this.slots;
    return fills;
}

// returns whether buffers are all filled
CircularAudioBuffer.prototype.full = function () {
    //console.debug(this.filledBuffers());
    return this.filledBuffers() >= this.slots - 1;
}

// returns a reference to next available buffer to be filled
CircularAudioBuffer.prototype.prepare = function () {
    if (this.full()) {
        //console.log('buffers full!!')
        return
    }
    var buffer = this.buffers[ this.filled++];
    this.filled %= this.slots;
    return buffer;
}

// returns the next buffer in the queue
CircularAudioBuffer.prototype.use = function () {
    if (! this.filledBuffers()) return;
    var buffer = this.buffers[ this.used++];
    this.used %= this.slots;
    return buffer;
}

/************************************************************************
 * Web Audio Stuff
 */

var SAMPLE_RATE = 44100;
var BUFFER = 4096;
var channels = 2;

var audioCtx;
var source;
var scriptNode;
var circularBuffer;
var emptyBuffer;

function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    scriptNode = audioCtx.createScriptProcessor(BUFFER, 0, channels);
    scriptNode.onaudioprocess = onAudioProcess;
    
    source = audioCtx.createBufferSource();
    circularBuffer = new CircularAudioBuffer(8);
    emptyBuffer = audioCtx.createBuffer(channels, BUFFER, SAMPLE_RATE);
    
    source.connect(scriptNode);
    source.start(0);
}

function startAudio() {    
    scriptNode.connect(audioCtx.destination);
}

function pauseAudio() {
    circularBuffer.reset();
    scriptNode.disconnect();
}


/************************************************************************
 * Emscripten variables and callback - cannot be renamed
 */

var ULONG_MAX = 4294967295;
var _EM_signalStop = 0;
var _EM_seekSamples = ULONG_MAX;

function processAudio(buffer_loc, size) {
    var buffer = circularBuffer.prepare();
    var left_buffer_f32 = buffer.getChannelData(0);
    var right_buffer_f32 = buffer.getChannelData(1);
        
    // Copy emscripten memory (OpenAL stereo16 format) to JS
    for (var i = 0; i < size; i++) {
        left_buffer_f32[i] = MidiPlayer.HEAP16[(buffer_loc >> 1) + 2 * i + 0] / 32768;
        right_buffer_f32[i] = MidiPlayer.HEAP16[(buffer_loc >> 1) + 2 * i + 1] / 32768;
    }
}

function updateProgress() {}

function completeConversion(status) {
    midiPlayer.drainBuffer = true;
    midiPlayer.convertionJob = null;
    // Not a pause
    if (_EM_signalStop != 2) {
        setTimeout(stop, 1000);   
    }
}

/************************************************************************
 * Global player variables and functions
 */


// variables
midiPlayer.isLoaded = false;
midiPlayer.isAudioInit = false;
midiPlayer.input = null;
midiPlayer.lastMillisec = 0;
midiPlayer.midiName = ''
midiPlayer.convertionJob = null;
midiPlayer.currentSamples = ULONG_MAX;
midiPlayer.totalSamples = 0;
midiPlayer.updateRate = 50;
midiPlayer.drainBuffer = false;
var BASE64_MARKER = ';base64,';

// callbacks
midiPlayer.onStop = null;
midiPlayer.onUpdate = null;

var MidiPlayer = {
    noInitialRun: true,
    totalDependencies: 1,
    monitorRunDependencies: function(left) {
        if ((left == 0) && !midiPlayer.isLoaded) {
          midiPlayer.isLoaded = true;
        }
    }
};
MidiModule(MidiPlayer); 

 
function onAudioProcess(audioProcessingEvent) {
    var generated = circularBuffer.use();
    
    if (!generated && midiPlayer.drainBuffer) {
        pauseAudio();
        midiPlayer.drainBuffer = false;
        return;
    }
    if (!generated) {
        generated = emptyBuffer;
    }
    
    var outputBuffer = audioProcessingEvent.outputBuffer;
    var offset = 0;
    if (outputBuffer.copyToChannel !== undefined) {
        outputBuffer.copyToChannel(generated.getChannelData(0), 0, offset);
        outputBuffer.copyToChannel(generated.getChannelData(1), 1, offset);
    } else {
        var leftChannel = outputBuffer.getChannelData(0);
        var rightChannel = outputBuffer.getChannelData(1);
        var generatedLeftChannel = generated.getChannelData(0);
        var generatedRightChannel = generated.getChannelData(1);
        var i;
        for (i = 0; i < BUFFER; i++) {
            leftChannel[i] = generatedLeftChannel[i];
            rightChannel[i] = generatedRightChannel[i];
        }
    }
}


function convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));
    
    for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;
}

function convertFile(file, data) {
    midiPlayer.midiName = file;
    midiPlayer.input = null;
    console.log('open ', midiPlayer.midiName);
    MidiPlayer['FS'].writeFile(midiPlayer.midiName, data, {
        encoding: 'binary'
    });
    play();
}

function startPlaying(which) {
    if(which) {
        setSong(which);
    }
    midiPlayer.play(midiPlayer.song);
}

function play() {
    if (!midiPlayer.isLoaded) {
        return;
    }
    if (!midiPlayer.isAudioInit) {
          initAudio();
          midiPlayer.isAudioInit = true;
    }

    _EM_seekSamples = midiPlayer.currentSamples;
    if (midiPlayer.convertionJob) {
        return;
    }
    
    _EM_signalStop = 0;
    setTimeout(runConversion, 100);
}

function stopPlaying() {
    _EM_signalStop = 1;
    _EM_seekSamples = 0;
    circularBuffer.reset();
    
    midiPlayer.totalSamples = 0;
    midiPlayer.currentSamples = ULONG_MAX;
    
    if (midiPlayer.onStop != null) midiPlayer.onstopPlaying(); 
}

function runConversion() {
    midiPlayer.convertionJob = {
        sourceMidi: midiPlayer.midiName,
        targetWav: midiPlayer.midiName.replace(/\.midi?$/i, '.wav'),
        targetPath: '',
        conversion_start: Date.now()
    };
    
    circularBuffer.reset();
    startAudio();

    console.log(midiPlayer.convertionJob);
        
    MidiPlayer.ccall('wildwebmidi',
        null,[ 'string', 'string', 'number'],[midiPlayer.convertionJob.sourceMidi, midiPlayer.convertionJob.targetPath, 10], {
            async: true
        });
}


function setSong(which) {
    midiPlayer.song = "data:audio/midi;base64," + which;
}






(function () {
    
    midiPlayer = function (options) {

        var options = extend({
            onStop: null,
            onUpdate: null,
        },
        options);
        
        midiPlayer.play = function (song) {
            if (midiPlayer.isLoaded == false) {
                midiPlayer.input = midiPlayer.song;
            }
            else {
                var byteArray = convertDataURIToBinary(midiPlayer.song);
                if (midiPlayer.totalSamples > 0) {
                    stopPlaying();
                    // a timeout is necessary because otherwise writing to the disk is not done
                    setTimeout(function() {convertFile("player.midi", byteArray);}, 200);
                }
                else {
                    convertFile("player.midi", byteArray);
                }
            }
        };
        
        midiPlayer.seek = function (millisec) {
            if (midiPlayer.totalSamples == 0) return;
            var samples = millisec * SAMPLE_RATE / 1000;
            midiPlayer.currentSamples = Math.min(midiPlayer.totalSamples, samples);
            play();
        };
        
        midiPlayer.stop = function () {
            stopPlaying();
        };
        
        return;
    };
}
());

midiPlayer();
