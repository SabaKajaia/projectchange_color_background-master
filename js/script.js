//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']


  

  function miFuncion() {

    let indice = Math.floor(Math.random() * colores.length); // índice aleatorio dentro del rango del array
    let colorAleatorio = colores[indice]; // color aleatorio seleccionado del array
    document.body.style.backgroundColor = colorAleatorio; // cambiar el color de fondo del body
  }

 // function miFuncion() {
 //   document.body.style.backgroundColor = "yellow";
//  }