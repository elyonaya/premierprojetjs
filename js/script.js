const color = ["pink", "lightblue", "purple"];

function generateNumber() {
    return Math.floor(Math.random() * color.length);
}

function setBgColor() {

    const randomNumber = generateNumber();

    document.getElementById("bg").style.backgroundColor=color[randomNumber];
    document.getElementById("bgcolor").innerHTML=color[randomNumber];
    document.getElementById("bgcolor").style.color=color[randomNumber];
}

document.getElementById("bgbutton").addEventListener("click", setBgColor)