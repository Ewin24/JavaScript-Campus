//TIPOS DE DATOS EN JS
console.log(typeof (3));
console.log(typeof ('hola'));
console.log(typeof (true));
console.log(typeof (let));
console.log(typeof (null) + ' Deberia ser null, pero es un error de JS,  usar ===');
console.log(typeof (Symbol()));
console.log(typeof (123n));


//Formas de hacer inputs
window.prompt('Ingrese el dato: ');
window.confirm('Te gusta campuusss?');

//Formas de hacer outputs
window.alert('Hay librerias que proporcionan otras herramientas para entrada y salida de datos');
console.log('este es un mensaje de salida');


//DOM en JS
const h1 = document.getElementById('title');
const btn = document.getElementById('btn');
btn.addEventListener('click', (evt) => {
    let newTitle = prompt('Ingresa el nuevo titulo: ', 'titulo de prueba');
    if (newTitle === 'titulo de prueba' || newTitle !== ' ') {
        h1.textContent = newTitle;
    }
}
);