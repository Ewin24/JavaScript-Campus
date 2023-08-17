// ################################################
// ##                EJERCICIO 6                 ##
// ################################################

function newPassword(a, b) {
    let mergedString = '';

    if (constraints(a, b)) {
        if (a.length > b.length) {
            while (condition) {
                for (let i = 0; i < a.length; i++) {
                    
                }
            }
        }

    }
    return mergedString;
}

function constraints(a, b) {
    flag = flase;
    if (a.length >= 1 && b.length <= 25000) {
        console.log("Longitud incorrecta en la palabra")
    }
    if ((/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(a)) && (/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(b))) {
        console.log("Caracteres incorrectos")
    } else {
        console.log("Las entradas de datos son corerectas");
        flag = true;
    }
    return flag;
}

console.log(
    newPassword('abc', 'def')
);