const clickMeButton = document.querySelector(".clickMe");

// // SAME
// function getAlert() {
//     alert("POWERED UP!");
//     clickMeButton.removeEventListener ("click", getAlert) 
// }

// clickMeButton.addEventListener ("click", getAlert); 

// SAME --- only shows once
function getAlert(event) {
    // console.log(event.target)
    alert("POWERED UP!");
    // clickMeButton.removeEventListener ("click", getAlert) 
}

// Does not show since removed
clickMeButton.addEventListener ("click", getAlert, {once:true}); 
// clickMeButton.removeEventListener ("click", getAlert) 
// DO NOT PUT getAlert() inside the eventListener ---- because this calls the function and the alert will show before clicking or before event

// Should be same but not working !!!!!!!!!!!!!!!!!!!!!!!

// clickMeButton.addEventListener ("click", function getAlert() {
//     alert("POWERED UP!");
// });  

// clickMeButton.removeEventListener ("click", function getAlert() {
//     alert("POWERED UP!");
// }); 

// CHANGE BACKGROUND COLOR ---- SAME EFFECT
// function BGColor() {
//     document.body.style.backgroundColor = "pink"; 
// }

// clickMeButton.addEventListener ("click", BGColor); 

// CHANGE BG COLOR BY USING CLASSLIST IN CSS ---- SAME EFFECT, automatically adds pink class to body in HTML (inspector)
function BGColor() {
    document.body.classList.add("pink");
}

clickMeButton.addEventListener ("click", BGColor); 

// function btnText() {
//     if (clickMeButton.textContent === "Power Up?") {
//         clickMeButton.textContent = "Powered Up!" }
//     else {clickMeButton.textContent = "Power Up?"}
// }

// SAME with above >>> NOT WORKING!!!!
// function btnText() {
//     if (clickMeButton.textContent === "Power Up?") {
//         clickMeButton.textContent = "Powered Up!" }
//     else if (clickMeButton.textContent === "Powered Up!") {
//         clickMeButton.textContent = "Power Up?" }
//     }

// clickMeButton.addEventListener ("click", btnText); 


function createAddButton()
{
    const purpleButton = document.createElement("button");
    purpleButton.textContent = "Purple";
    purpleButton.addEventListener("mouseover", changeBGGreen);
    // purpleButton.classList.add("green-background");
    document.body.appendChild(purpleButton);
}   

clickMeButton.addEventListener ("click", createAddButton); 

function createAddParagraph()
{
    const newPara = document.createElement("p");
    newPara.textContent = "My Paragraph";
    newPara.addEventListener("mouseover", changeBGGreen);
    // newPara.classList.add("green-background");
    document.body.appendChild(newPara);
}   

clickMeButton.addEventListener ("click", createAddParagraph); 

function changeBGGreen(event)
{
    // console.log(event.target);
    event.target.classlist.add("green");
}

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mouseover", changeBGGreen);
