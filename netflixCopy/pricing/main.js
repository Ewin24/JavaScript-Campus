// console.log('hola1')


// setTimeout(() => {
//     console.log('hola2')
// });

// setInterval(() => {
//     console.log('hola3')
// }, 1000);


//funciones async
// let obtener = async (p1) => {
//     let peticion = await fetch(`${p1}.jason`);
//     let res = await peticion.json();
//     console.log(res);
// }
// obtener("config");


//actualizacion de header

let nombreArchivo = 'config';
let encabezado = async () => {
    let data = await fetch(nombreArchivo + '.json');
    let dataJson = await data.json();
    const elementoPadre = document.querySelector('#pricing-header');
    let elemento = '<h1 class="display-4 fw-normal text-body-emphasis">Element</h1>'
    elementoPadre.insertAdjacentHTML("beforeend", elemento);
}

encabezado()