//var localPlace

document.getElementById('gameScreen').onclick = function (e) {
    // e = Mouse click event.
    var box = document.getElementById('gameScreen');
    var rect = box.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    //console.log("Left? : " + x + " ; Top? : " + y + ".");
    document.getElementById("character").style.left = x + "px";
    document.getElementById("character").style.top = y + "px";
    console.log(e.clientX);

    switch (e.target.id) {
        case "door":
            showMessage("not sure what to do here?");
            break;
        case "windowRT":
            showMessage("Is there someone inside?");
            window.location.href = "/pages/onsideHouse.html";

            break;
        default:
            hideMessage();
            break;

    }

}

function showMessage(message) {
    document.getElementById("characterAudio").play();
    document.getElementById("charcterMessage").style.opacity = "1";
    document.getElementById("charcterMessage").innerText = message;
}

function hideMessage() {
    document.getElementById("characterAudio").pause();
    document.getElementById("charcterMessage").style.opacity = "0";
    document.getElementById("charcterMessage").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;...";
}