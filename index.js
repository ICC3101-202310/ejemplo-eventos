console.log("Hola, mundo!");

addEventListener("keydown", event => {
    if (event.code === "KeyV"){
        document.body.style.background = "violet";
    }
});

const turnRed = event => {
    if (event.code === "KeyV"){
        document.body.style.background = "red";
    }
}
addEventListener("keyup", turnRed);

const buttonHandler = event => {
    document.body.style.background = "";
    if (button.style.background === "red"){
        button.style.background = "";
    }
    else {
        button.style.background = "red";
    }
}

const button = document.getElementById("boton-abrir");
console.log(button);
button.addEventListener("click", buttonHandler);