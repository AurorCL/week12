const clickMeButton = document.querySelector(".clickMe");

function getAlert() {
    alert("POWERED UP!");
}

clickMeButton.addEventListener ("click", getAlert) 
// DO NOT PUT getAlert() inside the eventListener ---- because this calls the function and the alert will show before clicking or before event