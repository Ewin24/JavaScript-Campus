// ################################################
// ##                   RETO 1                   ##
// ################################################

function newPassword(a, b) {
    let mergedString = '';

    if (constraints(a, b)) {
        if (a.length > b.length) {
            for (let i = 0; i < a.length; i++) {
                mergedString += a[i];
                if (i < b.length) {
                    mergedString += b[i];
                }
            }
        }
        if (a.length < b.length) {
            for (let i = 0; i < b.length; i++) {
                mergedString += b[i];
                if (i < a.length) {
                    mergedString += a[i];
                }
            }
        } else {//caso en el que son iguales
            for (let i = 0; i < b.length; i++) {
                mergedString += a[i];
                mergedString += b[i];
            }
        }
    }
    return mergedString;
}

function constraints(a, b) {
    let flag = false;
    if (a.length <= 1 && b.length <= 25000) {
        console.log("Longitud incorrecta en la palabra")
    }
    if ((/^([-ñÑáéíóúÁÉÍÓÚ])+$/i.test(a)) && (/^([-ñÑáéíóúÁÉÍÓÚ])+$/i.test(b))) {
        console.log("Caracteres incorrectos")
    } else {
        console.log("Las entradas de datos son corerectas");
        flag = true;
    }
    return flag;
}

console.log(newPassword('abc', 'defa'));