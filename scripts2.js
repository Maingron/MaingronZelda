window.addEventListener("resize",function() {
        
    objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.top * data.field.oneHeight - data.field.oneHeight * .5 + "px";
    objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.left * data.field.oneWidth - data.field.oneWidth * .5 + "px";

});


addEventListener("focus",function() {
    objects.field.style.top = objects.gameframe.offsetHeight / 2 - data.runner.position.top * data.field.oneHeight - data.field.oneHeight * .5 + "px";
    objects.field.style.left = objects.gameframe.offsetWidth / 2 - data.runner.position.left * data.field.oneWidth - data.field.oneWidth * .5 + "px";

});




//auto save for developing purposes:

setInterval(function() {
    doSave();
},100)