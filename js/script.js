const color = ["pink", "blue", "red", "purple"];

function setBgColor() {
    document.getElementById("bg").style.backgroundColor=color;
    document.getElementById("bgcolor").innerHTML=color;
    document.getElementById("bgcolor").style.color=color;
}

document.getElementById("bgbutton").addEventListener("click", setBgColor)