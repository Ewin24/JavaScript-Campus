// ################################################
// ##                EJERCICIO 3                 ##
// ################################################

let array = [2, 4, 3, 6, 9, 8];

function celcius(array, objetivo) {
    elements = [];
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
            if (array[i] + array[k] == objetivo) {
                element = [array[i], array[k]];
                elements.push(element);
            }
        }
    }
    return elements;
}

console.log(celcius(array, 10))