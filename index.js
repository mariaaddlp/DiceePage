// Generar números aleatorios para cada jugador (1 a 6)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construir las rutas de las imágenes correspondientes
var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";
var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

// Seleccionar las imágenes de los dados en el DOM
var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

// Cambiar las imágenes de los dados según los números aleatorios
img1.setAttribute("src", randomImageSource1);
img2.setAttribute("src", randomImageSource2);

// Determinar el ganador y actualizar el encabezado
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}