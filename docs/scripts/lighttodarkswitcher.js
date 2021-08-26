var lightMode;

function checkForMode(doc){
    if(localStorage.getItem("displayModeLODAstronoma") != null){
        lightMode = localStorage.getItem("displayModeLODAstronoma");
        toggle(doc);
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

checkForMode();