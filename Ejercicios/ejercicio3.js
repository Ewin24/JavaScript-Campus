// ################################################
// ##                EJERCICIO 3                 ##
// ################################################

let array = [2, 4, 3, 6, 9, 8, 4, 6, 4, 5, 5, 5];

function filtradoArreglos(array, objetivo) {
    elements = [];
    for (let i = 0; i < array.length; i++) {
        for (let k = i + 1; k < array.length; k++) {
            if (array[i] + array[k] == objetivo) {
                element = [array[i], array[k]];
                elements.push(element);
            }
        }
    }

    //validacion de elementos repetidos 
    for (let i = 0; i < elements.length; i++) {
        for (let k = i + 1; k < elements.length; k++) {
            if (elements[i][0] === elements[k][1]) {
                elements.splice(i, 1)//eliminar repetidos
                i = 0
            }
        }
    }
    return elements;

}

console.log(filtradoArreglos(array, 10));
