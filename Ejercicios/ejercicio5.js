// ################################################
// ##                EJERCICIO 5                 ##
// ################################################


function piramide() {
    let arreglo = []
    for (let i = 1; i <= 9; i++) {
        arreglo.push(i);
        for (let k = 0; k < arreglo.length; k++) {
            console.log(arreglo[k]);
        }
        console.log('\n')
    }
}


function piramide2() {
    num = ''
    for (let i = 1; i <= 9; i++) {
        num += i.toString()
        console.log(num)
    }
}

piramide()
piramide2()