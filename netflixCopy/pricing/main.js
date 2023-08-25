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
    let elemento = `
    <h1 class="display-4 fw-normal text-body-emphasis">
        ${dataJson.encabezado.titulo}
    </h1>
    ${dataJson.encabezado.lista.map((value) =>
        `
        <div class="d-flex">
                ${value.imagen} 
            <p class="mt-1 ms-2">
                ${value.texto}  
            </p>
        </div>
        `
    ).join(" ")
        }
    `;
    elementoPadre.insertAdjacentHTML("beforeend", elemento);
}
encabezado()


let cargarTarjetas = async () => {
    let datos = await fetch(nombreArchivo + '.json');
    let dataJson = await datos.json();
    const elementoPadre = document.querySelector('#cards-col');
    let tarjetas = /*html*/ `
    ${dataJson.tarjetas.lista.map((value) => `
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${value.titulo}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${value.precio}</h1>
                <button type="button" class="w-100 btn btn-lg btn-outline-danger">${value.boton}</button>
            </div>
        </div>
    </div>
    `
    ).join(" ")}
    `;
    elementoPadre.insertAdjacentHTML('beforeend', tarjetas);
}
cargarTarjetas();