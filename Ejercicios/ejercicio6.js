// ################################################
// ##                 ejercicio 6                ##
// ################################################

//arreglo de numeros aleatorios 

let arreglo = [];
function arregloAleatorio(array) {
    for (let i = 0; i <= 10; i++) {
        let numRandom = Math.floor(Math.random() * 11);
        array.push(`posicion: ${i} numero random: ${numRandom}`);
    }
    return array;

}

function pintar() {
    console.log(arregloAleatorio(arreglo));
}

pintar()