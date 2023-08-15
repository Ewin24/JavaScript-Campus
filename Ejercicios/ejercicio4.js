// ################################################
// ##                EJERCICIO 3                 ##
// ################################################


function sumaPares() {
    let par = 0, impar = 0;
    for (let i = 0; i <= 578934; i++) {
        if (i % 2 == 0) {
            par += i;
        } else {
            impar += i;
        }

    }
    console.log("par: " + par + "\n" + "impar: " + impar)
}

console.log(sumaPares());
