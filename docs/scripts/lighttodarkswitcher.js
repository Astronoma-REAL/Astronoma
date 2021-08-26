var lightMode;

function checkForMode(){
    if(localStorage.getItem("displayModeLODAstronoma") != null){
        lightMode = localStorage.getItem("displayModeLODAstronoma");
    } else {
        lightMode = false;
    }
}

function toggle(doc){
    if(lightMode){
        doc.setAttribute("href", "dark.css");
        localStorage.setItem("displayModeLODAstronoma", !lightMode);
    } else {
        doc.setAttribute("href", "light.css");
        localStorage.setItem("displayModeLODAstronoma", !lightMode);
    }
    lightMode = !lightMode;
}