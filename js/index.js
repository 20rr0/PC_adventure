document.getElementById('gameScreen').onclick = function (e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
    document.getElementById("character").style.left = x + "px";
    document.getElementById("character").style.top = y + "px";

}