// I want when I click the btn the cicrle backgoround color turn to be blue

//2. I want when I refresh the circle keeps blue and
//1. select the circle by class .circle
//2. select the btn by its Id #circle btn

const circle = document.querySelector(".circle");
const circleActionBtn = document.querySelector("#circleBTN");


//when I click the btn I show a message
//change the backgoround color to be blue
/* circleActionBtn.onclick = () => circle.style.backgroundColor = "blue"; */

//
localStorage.setItem("name", "Sudi");

const name = localStorage.getItem("name");

const bgColor = localStorage.getItem("bgColor");
circle.style.backgroundColor = "bgColor";

circleActionBtn.addEventListener("click", function () {
    localStorage.setItem("bgColor", "green");
    circle.style.backgroundColor = "blue";
})
/* circleActionBtn.addEventListener("click", () => console.log("hey you clicked the btn")) */