
const button = document.getElementById("changeColorButton");
const coloredDiv = document.querySelector(".colored-div");

function changeColor ()
{
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    coloredDiv.style.backgroundColor = randomColor;
}

button.addEventListener("click", changeColor);