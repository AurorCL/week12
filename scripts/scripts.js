const clickMeButton = document.querySelector(".clickMe");

// SAME
function getAlert() {
    alert("POWERED UP!");
    clickMeButton.removeEventListener ("click", getAlert) 
}

clickMeButton.addEventListener ("click", getAlert); 

// SAME --- only shows once
// function getAlert() {
//     alert("POWERED UP!");
//     // clickMeButton.removeEventListener ("click", getAlert) 
// }

// Does not show since removed
// clickMeButton.addEventListener ("click", getAlert, {once:true}); 
// clickMeButton.removeEventListener ("click", getAlert) 
// DO NOT PUT getAlert() inside the eventListener ---- because this calls the function and the alert will show before clicking or before event

// Should be same but not working !!!!!!!!!!!!!!!!!!!!!!!

// clickMeButton.addEventListener ("click", function getAlert() {
//     alert("POWERED UP!");
// });  

// clickMeButton.removeEventListener ("click", function getAlert() {
//     alert("POWERED UP!");
// }); 