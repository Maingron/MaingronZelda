var pData = { // pData means permanent Data like saves
    "runner": {},
    "leveldata": {}
};

if(soundtrack) {

} else {
    var soundtrack = function() {};
}

var objects = {};
var data = {
    "temp": {}
};

function reset() {
    localStorage.clear();
    location.reload();
}

if (loadState("initinit")) {
    pData.leveldata = JSON.parse(loadState("pData.leveldata"));


} else {
    pData.leveldata.temple0 = {
        "keys": []
    };
    for (data.temp.iOfIninLdata1 = 0; data.temp.iOfIninLdata1 < 20; data.temp.iOfIninLdata1++) { //20 means maximum of 20 different keys per level
        pData.leveldata.temple0.keys[data.temp.iOfIninLdata1] = 0;
    }
    pData.leveldata.temple2 = pData.leveldata.temple1 = pData.leveldata.temple0;
    for (data.temp.iOfIninLdata = 0; Object.keys(pData.leveldata).length > data.temp.iOfIninLdata; data.temp.iOfIninLdata++) {}
    // key 0 means the amount of the keys currently in the inventory in the level

    saveState("pData.leveldata", JSON.stringify(pData.leveldata));
    saveState("initinit", 1);
    location.reload();
}






if (document.getElementById("developer-true")) {
    pData.runner.developer = !0;
}

if (loadState("cLevel")) {
    pData.level = loadState("cLevel");
} else {
    pData.level = "004";
}

if (loadState("hearts")) {
    pData.hearts = loadState("hearts");
} else {
    pData.hearts = 3;
    saveState("hearts", pData.hearts);
}

function init() {
    if (objects.field) {
        objects.field.innerHTML = "";
        objects.field.outerHTML = "";
    }
    objects = {
        "gameframe": document.getElementsByClassName("gameframe")[0]
    };

    data = {
        "ticktime": 100, //Production Value 120
        "temp": {
        },
        "field": {
            "height": 20,
            "width": 20,
            "oneHeight": 10,
            "oneWidth": 10
        },
        "keypress": {
            "up": !1,
            "down": !1,
            "left": !1,
            "right": !1,
            "interact": !1
        },
        "runner": {
            "cango": {
                "up": !1,
                "down": !1,
                "left": !1,
                "right": !1
            },
            "position": {
                "top": 0,
                "left": 0
            },
            "iframe": 0,
            "oldposition": {},
            "walkposition": {},
            "startposition": {},
            "oldotherposition": {}
        },
        "trigger": [],
        "walls": [],
        "enemys": [],
        "forenemys": [],
        "floor": [],
        "allthings": [],
        "idcount": 1
    };


    if (pData.runner.developer) {
        objects.positionboard = document.getElementsByClassName("positionboard")[0];
    }


    summonElement("field", objects.gameframe, "", "");
    objects.field = document.getElementsByClassName("field")[0];
}

function init2() {
    for (data.iOfInit2 = 0; data.walls.length > data.iOfInit2; data.iOfInit2++) {
        data.temp.setWalls = [];
        data.temp.setWalls[data.iOfInit2] = data.walls[data.iOfInit2].split(",");
        summonElement("wall", objects.field, +data.temp.setWalls[data.iOfInit2][1], +data.temp.setWalls[data.iOfInit2][2]);
    }

    for (data.temp.iOfInit2 = 0; data.walls.length > data.temp.iOfInit2; data.temp.iOfInit2++) {
        data.walls[data.temp.iOfInit2] = data.walls[data.temp.iOfInit2].split(",");
        data.walls[data.temp.iOfInit2][1] = +data.walls[data.temp.iOfInit2][1];
        data.walls[data.temp.iOfInit2][2] = +data.walls[data.temp.iOfInit2][2];
    }

    for (data.iOfInit2 = 0; data.enemys.length > data.iOfInit2; data.iOfInit2++) {

        data.temp.setEnemys = [];
        data.temp.setEnemys[data.iOfInit2] = data.enemys[data.iOfInit2].split(",");
        if (data.temp.setEnemys[data.iOfInit2][0] == "slicer") {
            if (!data.temp.setEnemys[data.iOfInit2][3] && !data.temp.setEnemys[data.iOfInit2][4] && !data.temp.setEnemys[data.iOfInit2][5] && !data.temp.setEnemys[data.iOfInit2][6]) {
                data.temp.setEnemys[data.iOfInit2][3] = 0;
                data.temp.setEnemys[data.iOfInit2][4] = 0;
                data.temp.setEnemys[data.iOfInit2][5] = 1000;
                data.temp.setEnemys[data.iOfInit2][6] = 1000;

                for (data.temp.iOfInit2_2 = 0; data.walls.length > data.temp.iOfInit2_2; data.temp.iOfInit2_2++) {
                    if (data.walls[data.temp.iOfInit2_2][2] == data.temp.setEnemys[data.iOfInit2][2]) {
                        if (data.walls[data.temp.iOfInit2_2][1] > data.temp.setEnemys[data.iOfInit2][1] && data.walls[data.temp.iOfInit2_2][1] < data.temp.setEnemys[data.iOfInit2][5]) {
                            data.temp.setEnemys[data.iOfInit2][5] = data.walls[data.temp.iOfInit2_2][1];
                        }

                        if (data.walls[data.temp.iOfInit2_2][1] < data.temp.setEnemys[data.iOfInit2][1] && data.walls[data.temp.iOfInit2_2][1] > data.temp.setEnemys[data.iOfInit2][3]) {
                            data.temp.setEnemys[data.iOfInit2][3] = data.walls[data.temp.iOfInit2_2][1];
                        }
                    } else if (data.walls[data.temp.iOfInit2_2][1] == data.temp.setEnemys[data.iOfInit2][1]) {
                        if (data.walls[data.temp.iOfInit2_2][2] > data.temp.setEnemys[data.iOfInit2][2] && data.walls[data.temp.iOfInit2_2][2] < data.temp.setEnemys[data.iOfInit2][6]) {
                            data.temp.setEnemys[data.iOfInit2][6] = data.walls[data.temp.iOfInit2_2][2];
                        }

                        if (data.walls[data.temp.iOfInit2_2][2] < data.temp.setEnemys[data.iOfInit2][2] && data.walls[data.temp.iOfInit2_2][2] > data.temp.setEnemys[data.iOfInit2][4]) {
                            data.temp.setEnemys[data.iOfInit2][4] = data.walls[data.temp.iOfInit2_2][2];
                        }
                    }
                }

                data.enemys[data.iOfInit2] = data.temp.setEnemys[data.iOfInit2][0] + "," + data.temp.setEnemys[data.iOfInit2][1] + "," + data.temp.setEnemys[data.iOfInit2][2] + "," + data.temp.setEnemys[data.iOfInit2][3] + "," + data.temp.setEnemys[data.iOfInit2][4] + "," + data.temp.setEnemys[data.iOfInit2][5] + "," + data.temp.setEnemys[data.iOfInit2][6];


            }
            summonElement("slicerbase1", objects.field, data.temp.setEnemys[data.iOfInit2][1], data.temp.setEnemys[data.iOfInit2][2]);

        }

        summonElement("enemy", objects.field, +data.temp.setEnemys[data.iOfInit2][1], +data.temp.setEnemys[data.iOfInit2][2], +data.temp.setEnemys[data.iOfInit2][3], +data.temp.setEnemys[data.iOfInit2][4], +data.temp.setEnemys[data.iOfInit2][5], +data.temp.setEnemys[data.iOfInit2][6]);

    }

    for (data.temp.iOfInit2 = 0; data.enemys.length > data.temp.iOfInit2; data.temp.iOfInit2++) {
        data.enemys[data.temp.iOfInit2] = data.enemys[data.temp.iOfInit2].split(",");
    }

    objects.runner = document.getElementsByClassName("runner")[0];

    objects.field.style.height = data.field.height * data.field.oneHeight + "px";
    objects.field.style.width = data.field.width * data.field.oneWidth + "px";

    objects.runner.style.top = data.runner.position.top * data.field.oneHeight + "px";
    objects.runner.style.left = data.runner.position.left * data.field.oneWidth + "px";

    objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.top * data.field.oneHeight - data.field.oneHeight * .5 + "px";
    objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.left * data.field.oneWidth - data.field.oneWidth * .5 + "px";
    if (!data.runner.startposition.top) {
        data.runner.startposition.top = data.runner.position.top;
    }

    if (!data.runner.startposition.left) {
        data.runner.startposition.left = data.runner.position.left;
    }


    if (pData.runner.developer) {
        for (data.temp.iOfInit2 = 0; data.enemys.length > data.temp.iOfInit2; data.temp.iOfInit2++) {
            if (data.enemys[data.temp.iOfInit2][0] == "slicer") {
                if (!data.enemys[data.temp.iOfInit2][3] || !data.enemys[data.temp.iOfInit2][4] || !data.enemys[data.temp.iOfInit2][5] || !data.enemys[data.temp.iOfInit2][6]) {
                    document.getElementsByClassName("slicer")[data.temp.iOfInit2].style.animationName = "error1";

                }
                summonElement("slicer-marker1", "", data.enemys[data.temp.iOfInit2][3], data.enemys[data.temp.iOfInit2][2]);
                summonElement("slicer-marker3", "", data.enemys[data.temp.iOfInit2][5], data.enemys[data.temp.iOfInit2][2]);

                summonElement("slicer-marker2", "", data.enemys[data.temp.iOfInit2][1], data.enemys[data.temp.iOfInit2][4]);
                summonElement("slicer-marker4", "", data.enemys[data.temp.iOfInit2][1], data.enemys[data.temp.iOfInit2][6]);

                if (+data.enemys[data.temp.iOfInit2][3] > +data.enemys[data.temp.iOfInit2][5]) {
                    document.getElementsByClassName("slicer-marker1")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer-marker3")[data.temp.iOfInit2].style.animationName = "error1";
                }
                if (+data.enemys[data.temp.iOfInit2][3] > +data.enemys[data.temp.iOfInit2][1]) {
                    document.getElementsByClassName("slicer-marker1")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer")[data.temp.iOfInit2].style.borderLeft = "1px solid lime";
                }

                if (+data.enemys[data.temp.iOfInit2][5] < +data.enemys[data.temp.iOfInit2][1]) {
                    document.getElementsByClassName("slicer-marker3")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer")[data.temp.iOfInit2].style.borderRight = "1px solid lime";
                }


                if (+data.enemys[data.temp.iOfInit2][6] < +data.enemys[data.temp.iOfInit2][4]) {
                    document.getElementsByClassName("slicer-marker2")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer-marker4")[data.temp.iOfInit2].style.animationName = "error1";
                }
                if (+data.enemys[data.temp.iOfInit2][4] > +data.enemys[data.temp.iOfInit2][2]) {

                    document.getElementsByClassName("slicer-marker2")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer")[data.temp.iOfInit2].style.borderTop = "1px solid lime";
                }

                if (+data.enemys[data.temp.iOfInit2][6] < +data.enemys[data.temp.iOfInit2][2]) {

                    document.getElementsByClassName("slicer-marker4")[data.temp.iOfInit2].style.animationName = "error1";
                    document.getElementsByClassName("slicer")[data.temp.iOfInit2].style.borderBottom = "1px solid lime";
                }
            }
        }
    }

    cleanupTiles();
    randomizeGraphics();
}

loadLevel();

function makeKeygroup(number, which) {
    console.log("Missing Feature:makeKeygroup()");
}

function destroyElement(x, y, type) {
    for (var i = 0; i < data.allthings.length; i++) {
        if (data.allthings[i][0] == "trigger") {
            console.log(data.allthings[i]);
        }


        if (data.allthings[i][1] == x * data.field.oneWidth) {
            if (data.allthings[i][2] == y * data.field.oneHeight) {
                console.log(data.allthings[i][0]);

                if (type == "key" && data.allthings[i][0] == "key1" || data.allthings[i][0] == "trigger") {
                    document.getElementById(data.allthings[i][3]).outerHTML = "";
                    console.log(data.allthings[i]);

                    data.allthings.splice(i, 1);
                    console.log("key");
                    return;
                } else {
                    continue;
                }
            }
        }
    }
}

function summonElement(classname, childof, x = 0, y = 0, triggerdo) {
    if(classname == "runner") {
        if(document.getElementsByClassName("runner")[0]) {
            document.getElementsByClassName("runner")[0].outerHTML = "";
        }
    }
    data.idcount++;
    if (childof == "") {
        childof = objects.field;
    }
    x = x * data.field.oneHeight;
    y = y * data.field.oneWidth;
    if (classname == "textbox") {
        data.temp.newElement = document.createElement("p");

        data.temp.newElement.innerHTML = triggerdo;
    } else {
        data.temp.newElement = document.createElement("div");
    }

    data.temp.newElement.classList.add(classname);
    if (classname == "wall") {
        data.temp.newElement.classList.add(data.temp.setWalls[data.iOfInit2][0]);
    }
    if (classname == "enemy") {
        data.temp.newElement.classList.add(data.temp.setEnemys[data.iOfInit2][0]);
    }
    childof.appendChild(data.temp.newElement);

    // data.temp.newElement.style.left = x;
    // data.temp.newElement.style.top = y;

    if (classname != "field") {
        data.temp.newElement.style.top = y + "px";
        data.temp.newElement.style.left = x + "px";
    }

    if (classname == "trigger") {
        data.trigger.push([triggerdo, x, y]);
    }

    if (pData.runner.developer) {
        data.temp.newElement.title = data.temp.newElement.classList.toString() + "\nx:" + x / 10 + " y:" + y / 10;
    }

    if (triggerdo) {
        data.temp.newElement.title = triggerdo;
    }

    // if(classname.indexOf("floor")>=0 || classname.indexOf("type")>=0) {
    //     data.temp.newElement.id = data.idcount;
    //     data.floor[data.floor.length] = [classname,x,y,data.idcount];
    // }

    if (classname != "field" && classname != "runner" && classname != "hearts" && classname != "aHeart" && classname != "halfaHeart") {
        data.temp.newElement.id = data.idcount;
        data.allthings[data.allthings.length] = [classname, x, y, data.idcount];

        // if (pData.runner.developer) {
        //     if (classname == "trigger" || classname == "oldotherposition" || classname == "positionboard") {
        //     }
        // }
    }
}

function summonElementKey(classname, levelnr, keynr, x, y) { // Spawn a key
    if (pData.leveldata[levelnr].keys[keynr] != 1) {
        summonElement(classname, "", x, y);
        summonElement("trigger", "", x, y, "keycollect(" + levelnr + "," + keynr + ")");
    }
}

window.addEventListener("keydown", function(event) {
    var eventkeylowercase = event.key.toLowerCase();
    console.log(eventkeylowercase);
    if (eventkeylowercase == "w") {
        data.keypress.up = !0;
    } else if (eventkeylowercase == "s") {
        data.keypress.down = !0;
    } else if (eventkeylowercase == "arrowup") {
        data.keypress.up = !0;
    } else if (eventkeylowercase == "arrowdown") {
        data.keypress.down = !0;
    }

    if (eventkeylowercase == "e") {
        data.keypress.interact = !0;
    }

    if (eventkeylowercase == "a") {
        data.keypress.left = !0;
    } else if (eventkeylowercase == "d") {
        data.keypress.right = !0;
    } else if (eventkeylowercase == "arrowleft") {
        data.keypress.left = !0;
    } else if (eventkeylowercase == "arrowright") {
        data.keypress.right = !0;
    }

    if (eventkeylowercase == "escape") {
        data.runner.inmenu = !0;
        data.runner.walkposition = data.runner.position;
        loadLevel("004-3");
    }

    //developer:
    if (eventkeylowercase == "c") {
        if (!data.walls2) {
            data.walls2 = data.walls;
            data.walls = "";
        } else {
            data.walls = data.walls2;
            data.walls2 = undefined;
        }
        if (!data.enemys2) {
            data.enemys2 = data.enemys;
            data.enemys = "";
        } else {
            data.enemys = data.enemys2;
            data.enemys2 = undefined;
        }
    }
});



window.addEventListener("keyup", function (event) {
    var eventkeylowercase = event.key.toLowerCase();
    if (eventkeylowercase == "w") {
        data.keypress.up = !1;
    }

    if (eventkeylowercase == "s") {
        data.keypress.down = !1;
    }

    if (eventkeylowercase == "a") {
        data.keypress.left = !1;

    }
    if (eventkeylowercase == "d") {
        data.keypress.right = !1;
    }

    if (eventkeylowercase == "arrowup") {
        data.keypress.up = !1;
    }

    if (eventkeylowercase == "arrowdown") {
        data.keypress.down = !1;
    }

    if (eventkeylowercase == "arrowleft") {
        data.keypress.left = !1;
    }

    if (eventkeylowercase == "arrowright") {
        data.keypress.right = !1;
    }
});


window.setInterval(function () {
    doTick();
}, data.ticktime);

window.setInterval(function () {
    doTick2();
}, data.ticktime * 3);


function doTick() {

    if (!data.runner.inmenu) {
        data.runner.oldposition.top = data.runner.position.top;
        data.runner.oldposition.left = data.runner.position.left;
    }

    for (data.temp.iOfTick = 0; data.walls.length > data.temp.iOfTick; data.temp.iOfTick++) {

        if (data.runner.position.top == +data.walls[data.temp.iOfTick][2] - 1 && data.runner.position.left == +data.walls[data.temp.iOfTick][1]) {
            data.runner.cango.down = 0;
            if (data.walls[data.temp.iOfTick][0] == "type2-15") {
                data.runner.cango.down = 1;
            }
        } else if (data.runner.position.top == +data.walls[data.temp.iOfTick][2] && data.runner.position.left == +data.walls[data.temp.iOfTick][1]) {
            if (data.walls[data.temp.iOfTick][0] == "type2-15") {
                data.keypress.down = 1;
                setTimeout(function () {
                    data.keypress.down = 0;
                }, data.ticktime / 2);
            }
        }


        if (data.runner.position.top == data.walls[data.temp.iOfTick][2] + 1 && data.runner.position.left == data.walls[data.temp.iOfTick][1]) {
            data.runner.cango.up = 0;
        }

        if (data.runner.position.left == data.walls[data.temp.iOfTick][1] - 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2]) {
            data.runner.cango.right = 0;
        }

        if (data.runner.position.left == data.walls[data.temp.iOfTick][1] + 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2]) {
            data.runner.cango.left = 0;
        }

        if (data.keypress.down && data.keypress.right) {
            if (data.runner.position.left == data.walls[data.temp.iOfTick][1] - 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2] - 1) {
                data.runner.cango.right = 0;
            }
        } else if (data.keypress.down && data.keypress.left) {
            if (data.runner.position.left == data.walls[data.temp.iOfTick][1] + 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2] - 1) {
                data.runner.cango.left = 0;
            }
        }

        if (data.keypress.up && data.keypress.right) {
            if (data.runner.position.left == data.walls[data.temp.iOfTick][1] - 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2] + 1) {
                data.runner.cango.right = 0;
            }
        } else if (data.keypress.up && data.keypress.left) {
            if (data.runner.position.left == data.walls[data.temp.iOfTick][1] + 1 && data.runner.position.top == data.walls[data.temp.iOfTick][2] + 1) {
                data.runner.cango.left = 0;
            }
        }
    }



    for (data.temp.iOfTick = 0; data.trigger.length > data.temp.iOfTick; data.temp.iOfTick++) {
        if (data.runner.position.left == data.trigger[data.temp.iOfTick][1] / data.field.oneWidth && data.runner.position.top == data.trigger[data.temp.iOfTick][2] / data.field.oneHeight) {
            // soundtrack("start",songs["dev_trigger"]);
            if (data.trigger[data.temp.iOfTick][0].indexOf("loadLevel(") >= 0) {
                loadLevel(data.trigger[data.temp.iOfTick][0].split("l(")[1].split(")")[0]);
            } else if (data.trigger[data.temp.iOfTick][0].indexOf("saveState(") >= 0) {
                saveState(data.trigger[data.temp.iOfTick][0].split("te('")[1].split("',")[0], data.trigger[data.temp.iOfTick][0].split(",")[1].split(")")[0]);
                loadOptions2();

            } else if (data.trigger[data.temp.iOfTick][0].indexOf("interactWith(") >= 0) {
                interactWith(data.trigger[data.temp.iOfTick][0].split("th(")[1].split(")")[0]);
            } else if (data.trigger[data.temp.iOfTick][0].indexOf("spring(") >= 0) {
                tp((data.trigger[data.temp.iOfTick][0].split("spring(")[1].split(")")[0]).split(",")[0], (data.trigger[data.temp.iOfTick][0].split("spring(")[1].split(")")[0]).split(",")[1]);
            } else if (data.trigger[data.temp.iOfTick][0].indexOf("key") >= 0) {
                if (data.trigger[data.temp.iOfTick][0].indexOf("keyuse(") >= 0) {
                    console.log(data.trigger[data.temp.iOfTick]);
                    console.log("\n\n");
                    console.log(data.trigger[data.temp.iOfTick][0]);

                } else if (data.trigger[data.temp.iOfTick][0].indexOf("keycollect(") >= 0) {

                    data.temp.triggerKeycollect = [(data.trigger[data.temp.iOfTick][0].split("keycollect(")[1].split(")")[0]).split(",")[0], (data.trigger[data.temp.iOfTick][0].split("keycollect(")[1].split(")")[0]).split(",")[1]];
                    if (pData.leveldata[data.temp.triggerKeycollect[0]].keys[data.temp.triggerKeycollect[1]] == 0) {
                        pData.leveldata[data.temp.triggerKeycollect[0]].keys[0]++;
                    }
                    pData.leveldata[data.temp.triggerKeycollect[0]].keys[data.temp.triggerKeycollect[1]] = 1;
                    destroyElement(data.trigger[data.temp.iOfTick][1] / data.field.oneWidth, data.trigger[data.temp.iOfTick][2] / data.field.oneWidth, "key");

                }
            }
        }
    }


    doMove();

    doInMenuTick();


    data.runner.cango = {
        "up": !0,
        "down": !0,
        "left": !0,
        "right": !0
    }

    doEnemyTick();

    if (data.runner.iframe > 0) {
        data.runner.iframe = data.runner.iframe - 20;
    }

    if (pData.runner.developer) {
        if (objects.positionboard) {
            objects.positionboard.innerHTML = data.runner.position.left + "; " + data.runner.position.top;
        }
    }

    data.keypress.interact = !1;


    if (data.runner.oldposition.left && data.runner.oldposition.top) {

        if (data.runner.position.left != data.runner.oldposition.left) {
            data.runner.oldotherposition.left = +data.runner.oldposition.left;
            data.runner.oldotherposition.top = +data.runner.oldposition.top;
        }

        if (data.runner.position.top != data.runner.oldposition.top) {
            data.runner.oldotherposition.top = +data.runner.oldposition.top;
            data.runner.oldotherposition.left = +data.runner.oldposition.left;
        }

        if (pData.runner.developer) {
            if (objects.oldotherposition) {
                objects.oldotherposition.style.top = data.runner.oldotherposition.top * data.field.oneHeight + "px";
                objects.oldotherposition.style.left = data.runner.oldotherposition.left * data.field.oneWidth + "px";
            }
        }
    }
}

function doTick2() {
    data.visibleTilesY = window.innerHeight / (10 * 9) / 2 + 3; // CSS Tile height x Zoom level + Preprocessing
    data.visibleTilesX = window.innerWidth / (10 * 9) / 2 + 3; // CSS Tile height x Zoom level + Preprocessing

    for (var i = 0; data.allthings.length > i; i++) {
        if (data.allthings[i][2] / data.field.oneHeight < data.runner.position.top - data.visibleTilesY) {
            document.getElementById(data.allthings[i][3]).style.display = "none";
        } else if (data.allthings[i][2] / data.field.oneHeight > data.runner.position.top + data.visibleTilesY) {
            document.getElementById(data.allthings[i][3]).style.display = "none";
        } else if (data.allthings[i][1] / data.field.oneWidth < data.runner.position.left - data.visibleTilesX) {
            document.getElementById(data.allthings[i][3]).style.display = "none";
        } else if (data.allthings[i][1] / data.field.oneWidth > data.runner.position.left + data.visibleTilesX) {
            document.getElementById(data.allthings[i][3]).style.display = "none";
        } else {
            document.getElementById(data.allthings[i][3]).style.display = "inline";
        }
    }
}


function doMove() {

    if (data.runner.position.top <= 0) {
        data.runner.cango.up = !1;
    } else if (data.runner.position.top >= data.field.height - 1) {
        data.runner.cango.down = !1;
    }

    if (data.runner.position.left <= 0) {
        data.runner.cango.left = !1;
    } else if (data.runner.position.left >= data.field.width - 1) {
        data.runner.cango.right = !1;
    }


    if (data.keypress.up && data.runner.cango.up) {

        data.runner.position.top--;

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.top * data.field.oneHeight + data.field.oneHeight - data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
            if (objects.runner.style.backgroundPositionY != "-20px" && data.keypress.left == 0 && data.keypress.right == 0) {
                objects.runner.style.backgroundPositionY = "-20px";
            } else if (data.keypress.left == 0 && data.keypress.right == 0) {
                objects.runner.style.backgroundPositionY = "-30px";

            }
        }, data.ticktime / 4);

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop - data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
        }, data.ticktime / 2);

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop - data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
        }, 3 * data.ticktime / 4);


        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop - data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
        }, data.ticktime);


    } else if (data.keypress.down && data.runner.cango.down) {

        data.runner.position.top++;

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.top * data.field.oneHeight - data.field.oneHeight + data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
            if (objects.runner.style.backgroundPositionY != "-10px" && data.keypress.left == 0 && data.keypress.right == 0) {
                objects.runner.style.backgroundPositionY = "-10px";
            } else if (data.keypress.left == 0 && data.keypress.right == 0) {
                objects.runner.style.backgroundPositionY = "0";

            }
        }, data.ticktime / 4);

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop + data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";

        }, data.ticktime / 2);

        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop + data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";


        }, 3 * data.ticktime / 4);


        setTimeout(function () {
            data.runner.position.anitop = data.runner.position.anitop + data.field.oneHeight / 4;
            objects.runner.style.top = data.runner.position.anitop + "px";
            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";
        }, data.ticktime);
    } else {
        setTimeout(function () { // Update Playerposition occasionally (up-down)

            data.runner.position.anitop = +data.runner.position.top * data.field.oneHeight;

            objects.runner.style.top = data.runner.position.anitop + "px";

            objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.anitop - data.field.oneHeight * .5 + "px";

        }, data.ticktime / 2);
    }


    if (data.keypress.left && data.runner.cango.left) {

        data.runner.position.left--;

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.left * data.field.oneWidth + data.field.oneWidth - data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";

            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
            if (objects.runner.style.backgroundPositionY != "-40px") {
                objects.runner.style.backgroundPositionY = "-40px";
            } else {
                objects.runner.style.backgroundPositionY = "-50px";

            }
        }, data.ticktime / 4);

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft - data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, data.ticktime / 2);

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft - data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, 3 * data.ticktime / 4);


        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft - data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, data.ticktime);



    } else if (data.keypress.right && data.runner.cango.right) {

        data.runner.position.left++;

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.left * data.field.oneWidth - data.field.oneWidth + data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
            if (objects.runner.style.backgroundPositionY != "-60px") {
                objects.runner.style.backgroundPositionY = "-60px";
            } else {
                objects.runner.style.backgroundPositionY = "-70px";
            }
        }, data.ticktime / 4);

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft + data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, data.ticktime / 2);

        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft + data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, 3 * data.ticktime / 4);


        setTimeout(function () {
            data.runner.position.anileft = data.runner.position.anileft + data.field.oneWidth / 4;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";
        }, data.ticktime);
    } else {


        setTimeout(function () { // Update Playerposition occasionally (left-right)
            data.runner.position.anileft = data.runner.position.left * data.field.oneWidth;
            objects.runner.style.left = data.runner.position.anileft + "px";
            objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.anileft - data.field.oneWidth * .5 + "px";

        }, data.ticktime / 2);
    }

    setTimeout(function () {
        objects.runner.style.top = data.runner.position.anitop + "px";
        objects.runner.style.left = data.runner.position.anileft + "px";
    }, data.ticktime);
}

function doEnemyTick() {
    data.temp.slicernr = 0;

    for (data.temp.iOfEnemyTick = 0; data.enemys.length > data.temp.iOfEnemyTick; data.temp.iOfEnemyTick++) {
        if (data.enemys[data.temp.iOfEnemyTick][0] == "spikes") {
            if (data.runner.position.top == data.enemys[data.temp.iOfEnemyTick][2] && data.runner.position.left == data.enemys[data.temp.iOfEnemyTick][1]) {
                doHurt(.5);
            }
        } else if (data.enemys[data.temp.iOfEnemyTick][0] == "hole") {
            if (data.runner.position.top == data.enemys[data.temp.iOfEnemyTick][2] && data.runner.position.left == data.enemys[data.temp.iOfEnemyTick][1]) {

                for (var i=0; i <= 4; i++) { // Stop player from moving
                    setTimeout(function () {
                        data.runner.cango = {};
                    }, data.ticktime * i);
                }

                data.runner.position.top = data.runner.oldposition.top;
                data.runner.position.left = data.runner.oldposition.left;
            }

        } else if (data.enemys[data.temp.iOfEnemyTick][0] == "slicer") {
            if (data.runner.position.top == data.enemys[data.temp.iOfEnemyTick][2] && data.runner.position.left == data.enemys[data.temp.iOfEnemyTick][1]) {
                doHurt(1);
                data.runner.position.top = +data.runner.oldotherposition.top;
                data.runner.position.left = +data.runner.oldotherposition.left;
            } else if (data.runner.position.left == data.enemys[data.temp.iOfEnemyTick][1]) { //If above or below slicer


                if (data.runner.position.top > data.enemys[data.temp.iOfEnemyTick][2] && data.runner.position.top < data.enemys[data.temp.iOfEnemyTick][6]) {
                    data.temp.iOfSlicer = 0;

                    if (data.enemys[data.temp.iOfEnemyTick][7] == data.enemys[data.temp.iOfEnemyTick][1] && data.enemys[data.temp.iOfEnemyTick][8] == data.enemys[data.temp.iOfEnemyTick][2]) {} else {
                        if (data.enemys[data.temp.iOfEnemyTick][9] == "" || !data.enemys[data.temp.iOfEnemyTick][9]) {
                            data.enemys[data.temp.iOfEnemyTick][7] = data.enemys[data.temp.iOfEnemyTick][1];
                            data.enemys[data.temp.iOfEnemyTick][8] = data.enemys[data.temp.iOfEnemyTick][2];
                            data.enemys[data.temp.iOfEnemyTick][9] = "down";
                            data.forenemys.push(data.temp.iOfEnemyTick);
                        }
                    }
                } else if (data.runner.position.top < data.enemys[data.temp.iOfEnemyTick][2] && data.runner.position.top > data.enemys[data.temp.iOfEnemyTick][4]) {
                    data.temp.iOfSlicer = 0;

                    if (data.enemys[data.temp.iOfEnemyTick][7] == data.enemys[data.temp.iOfEnemyTick][1] && data.enemys[data.temp.iOfEnemyTick][8] == data.enemys[data.temp.iOfEnemyTick][2]) {} else {
                        if (data.enemys[data.temp.iOfEnemyTick][9] == "" || !data.enemys[data.temp.iOfEnemyTick][9]) {
                            data.enemys[data.temp.iOfEnemyTick][7] = data.enemys[data.temp.iOfEnemyTick][1];
                            data.enemys[data.temp.iOfEnemyTick][8] = data.enemys[data.temp.iOfEnemyTick][2];
                            data.enemys[data.temp.iOfEnemyTick][9] = "up";
                            data.forenemys.push(data.temp.iOfEnemyTick);
                        }
                    }
                }
            } else if (data.runner.position.top == data.enemys[data.temp.iOfEnemyTick][2]) { //If left or right from slicer

                if (data.runner.position.left > data.enemys[data.temp.iOfEnemyTick][1] && data.runner.position.left < data.enemys[data.temp.iOfEnemyTick][5]) {
                    data.temp.iOfSlicer = 0;

                    if (data.enemys[data.temp.iOfEnemyTick][8] == data.enemys[data.temp.iOfEnemyTick][2] && data.enemys[data.temp.iOfEnemyTick][7] == data.enemys[data.temp.iOfEnemyTick][1]) {} else {
                        if (data.enemys[data.temp.iOfEnemyTick][9] == "" || !data.enemys[data.temp.iOfEnemyTick][9]) {
                            data.enemys[data.temp.iOfEnemyTick][7] = data.enemys[data.temp.iOfEnemyTick][1];
                            data.enemys[data.temp.iOfEnemyTick][8] = data.enemys[data.temp.iOfEnemyTick][2];
                            data.enemys[data.temp.iOfEnemyTick][9] = "right";
                            data.forenemys.push(data.temp.iOfEnemyTick);
                        }
                    }
                } else if (data.runner.position.left < data.enemys[data.temp.iOfEnemyTick][1] && data.runner.position.left > data.enemys[data.temp.iOfEnemyTick][3]) {
                    data.temp.iOfSlicer = 0;

                    if (data.enemys[data.temp.iOfEnemyTick][8] == data.enemys[data.temp.iOfEnemyTick][2] && data.enemys[data.temp.iOfEnemyTick][7] == data.enemys[data.temp.iOfEnemyTick][1]) {} else {
                        if (data.enemys[data.temp.iOfEnemyTick][9] == "" || !data.enemys[data.temp.iOfEnemyTick][9]) {
                            data.enemys[data.temp.iOfEnemyTick][7] = data.enemys[data.temp.iOfEnemyTick][1];
                            data.enemys[data.temp.iOfEnemyTick][8] = data.enemys[data.temp.iOfEnemyTick][2];
                            data.enemys[data.temp.iOfEnemyTick][9] = "left";
                            data.forenemys.push(data.temp.iOfEnemyTick);
                        }
                    }
                }
            }



            document.getElementsByClassName("slicer")[data.temp.slicernr].style.left = data.enemys[data.temp.iOfEnemyTick][1] * data.field.oneWidth + "px";
            document.getElementsByClassName("slicer")[data.temp.slicernr].style.top = data.enemys[data.temp.iOfEnemyTick][2] * data.field.oneHeight + "px";
            data.temp.slicernr++;

        }
    }

    for (data.temp.iOfEnemyTick = 0; data.forenemys.length > data.temp.iOfEnemyTick; data.temp.iOfEnemyTick++) {
        if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][0] == "slicer") {
            if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "down") {
                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2] < +data.enemys[data.forenemys[data.temp.iOfEnemyTick]][6] - 1) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2]++;
                } else {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown12";
                }
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "up") {
                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2] > +data.enemys[data.forenemys[data.temp.iOfEnemyTick]][4] + 1) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2]--;
                } else {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown12";
                }
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "right") {
                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1] < +data.enemys[data.forenemys[data.temp.iOfEnemyTick]][5] - 1) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1]++;
                } else {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown12";
                }
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "left") {
                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1] > +data.enemys[data.forenemys[data.temp.iOfEnemyTick]][3] + 1) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1]--;
                } else {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown12";
                }
            }


            if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "retract") {
                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2] > data.enemys[data.forenemys[data.temp.iOfEnemyTick]][8]) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2]--;
                } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2] < data.enemys[data.forenemys[data.temp.iOfEnemyTick]][8]) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2]++;
                } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1] > data.enemys[data.forenemys[data.temp.iOfEnemyTick]][7]) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1]--;
                } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1] < data.enemys[data.forenemys[data.temp.iOfEnemyTick]][7]) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1]++;
                }

                if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][1] == data.enemys[data.forenemys[data.temp.iOfEnemyTick]][7] && data.enemys[data.forenemys[data.temp.iOfEnemyTick]][2] == data.enemys[data.forenemys[data.temp.iOfEnemyTick]][8]) {
                    data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown4";
                }
            }
            if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown12") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown11";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown11") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown10";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown10") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "retract";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown4") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown3";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown3") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown2";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown2") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "cooldown1";
            } else if (data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] == "cooldown1") {
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][9] = "";
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][8] = "";
                data.enemys[data.forenemys[data.temp.iOfEnemyTick]][7] = "";
                data.forenemys.splice(data.temp.iOfEnemyTick, 1);
            }
        }
    }
}


function saveState(name, content) {
    if (content == "t") {
        if (loadState(name) == 1) {
            content = 0;
        } else {
            content = 1;
        }
    } else if (content == "music") {
        if(loadState(name) != "false") {
            content = false;
        } else {
            content = "true";
        }
        var reloadaftersetting = true;
    }
    localStorage.setItem(name, content);
    if(reloadaftersetting) {
        window.location.reload();
    }
}

function loadState(name) {
    return (localStorage.getItem(name));
}

function generateGui() {
    data.temp.hearts = pData.hearts;
    if (!objects.hearts) {
        summonElement("hearts", document.body, 0, 0);
        objects.hearts = document.getElementsByClassName("hearts")[0];
    }
    returnHearts()
}

function returnHearts() {
    if (!objects.hearts) {
        objects.hearts = document.getElementsByClassName("hearts")[0];
    }
    if (objects.hearts) {
        objects.hearts.innerHTML = "";
    }

    data.temp.hearts = pData.hearts;
    data.temp.hearts = data.temp.hearts.toString();
    if (data.temp.hearts.indexOf(".") >= 0) {
        summonElement("halfaHeart", objects.hearts, 0, 0);
        data.temp.hearts = Math.floor(data.temp.hearts);
    }
    for (data.temp.iOfGui = 0; data.temp.hearts > data.temp.iOfGui; data.temp.iOfGui++) {
        summonElement("aHeart", objects.hearts, 0, 0);
    }
}

generateGui();

function doHurt(count) {

    if (data.runner.iframe == 0) {
        pData.hearts = +pData.hearts - count;
        saveState("hearts", pData.hearts);
        data.runner.iframe = 200;
    }


    // data.runner.position.top = data.runner.oldposition.top;
    // data.runner.position.left = data.runner.oldposition.left;
    data.runner.cango = {};
    returnHearts();
}

function loadOptions2() {
    if (loadState("colormode") == "1") {
        document.body.style.filter = "grayscale(1) brightness(1)";
    } else {
        document.body.style.filter = "grayscale(0) brightness(1)";
    }
}

loadOptions2();

function doInMenuTick() {

    if (data.runner.inmenu == true) {
        data.temp.menuGoBack = 0;
        data.runner.cango.down = 0;
        data.runner.cango.up = 0;

        if (data.runner.position.left == 3) {
            data.runner.cango.left = 1;
            data.runner.cango.right = 1;
        } else if (data.runner.position.left == 4) {
            setTimeout(function () {
                if (data.runner.inmenu) {
                    data.runner.position.left = 3;
                    data.runner.cango.right = 0;
                }
            }, data.ticktime);

        } else if (data.runner.position.left == 2) {
            data.temp.menuGoBack = 1;
            data.runner.position.left = 3;
        } else {
            data.runner.position.left = 3;
        }

        if (!data.menuitem) {
            data.menuitem = 1;
        }
        if (data.runner.iframe <= 0) {

        } else if (data.runner.inmenu == 0) {
            data.menuitem = 1;
        }
        if (data.temp.menuGoBack && pData.level != "004") {
            loadLevel("004");
        }
        if (pData.level == "004") {
        } else if (pData.level == "004-2") {
        }
    } else if (!data.runner.inmenu) {
        if (data.runner.oldposition.top && data.runner.walkposition.top) {
            data.runner.oldposition.top = data.runner.walkposition.top;
            data.runner.oldposition.left = data.runner.walkposition.left;
            data.runner.position.top = data.runner.oldposition.top;
            data.runner.position.left = data.runner.oldposition.left;
        }
    }
}



if (document.getElementById("developer-true")) {
    pData.runner.developer = !0;
    summonElement("positionboard", document.body, 0, 0);
    objects.positionboard = document.getElementsByClassName("positionboard")[0];
}


function interactWith(which) {
    if (data.keypress.interact == !0) {
        window.alert("Interacting with: " + which);
    }
}

function tp(x, y) { // Teleport
    data.runner.position.top = y;
    data.runner.position.left = x;

    objects.runner.style.top = data.runner.position.top * data.field.oneHeight + "px";
    objects.runner.style.left = data.runner.position.left * data.field.oneWidth + "px";

    objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.top * data.field.oneHeight - data.field.oneHeight * .5 + "px";
    objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.left * data.field.oneWidth - data.field.oneWidth * .5 + "px";
}


function randomizeGraphics() {

    // for(data.temp.iOfRandom1 = 0; document.getElementsByClassName("path1").length > data.temp.iOfRandom1; data.temp.iOfRandom1++) {
    //     randomizeGraphicsSub1(document.getElementsByClassName("path1"));
    // }


    for (data.temp.iOfRandom1 = 0; document.getElementsByClassName("floor3-1").length > data.temp.iOfRandom1; data.temp.iOfRandom1++) {
        data.temp.randomnumber1 = Math.floor(Math.random() * 5);
        if (data.temp.randomnumber1 == 1) {
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.add("floor3-2");
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.remove("floor3-1");
        } else if (data.temp.randomnumber1 == 2) {
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.add("floor3-3");
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.remove("floor3-1");
        } else if (data.temp.randomnumber1 == 3) {
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.add("floor3-4");
            document.getElementsByClassName("floor3-1")[data.temp.iOfRandom1].classList.remove("floor3-1");
        }
        // randomizeGraphicsSub1(document.getElementsByClassName("floor3-1"));
    }

    for (data.temp.iOfRandom1 = 0; document.getElementsByClassName("floor3-5").length > data.temp.iOfRandom1; data.temp.iOfRandom1++) {
        randomizeGraphicsSub1(document.getElementsByClassName("floor3-5"));
    }

    for (data.temp.iOfRandom1 = 0; document.getElementsByClassName("floor1-1").length > data.temp.iOfRandom1; data.temp.iOfRandom1++) {
        data.temp.randomnumber1 = Math.floor(Math.random() * 3);

        if (data.temp.randomnumber1 == 1) {
            document.getElementsByClassName("floor1-1")[data.temp.iOfRandom1].classList.add("floor1-3");
        }
    }

    // for(data.temp.iOfRandom1 = 0; document.getElementsByClassName("hole").length > data.temp.iOfRandom1; data.temp.iOfRandom1++) {
    //     randomizeGraphicsSub1(document.getElementsByClassName("hole"));
    // }

    function randomizeGraphicsSub1(which) {
        data.temp.randomnumber1 = Math.floor(Math.random() * 4);
        if (data.temp.randomnumber1 == 1) {
            which[data.temp.iOfRandom1].style.transform = "rotate(90deg)";
        } else if (data.temp.randomnumber1 == 2) {
            which[data.temp.iOfRandom1].style.transform = "rotate(180deg)";
        } else if (data.temp.randomnumber1 == 3) {
            which[data.temp.iOfRandom1].style.transform = "rotate(-90deg)";
        }
    }
}

function cleanupTiles() {
    //     for(data.temp.iOfCleanupTiles = 0; data.walls.length > data.temp.iOfCleanupTiles; data.temp.iOfCleanupTiles++) {
    //         // console.log(data.walls[data.temp.iOfCleanupTiles]);
    //         //  remove background tiles under blocks
    //     }
    // console.log(data.floor);
}

function doSave() {
    saveState("pData.leveldata", JSON.stringify(pData.leveldata));
}

if(loadState("music") == null) {
    saveState("music", "true");
}