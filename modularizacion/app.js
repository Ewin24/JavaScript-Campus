const cuerpo = document.querySelector('body');

let element = document.createElement('h3');
element.insertAdjacentText('beforeend', 'titulo3');
cuerpo.insertAdjacentElement('beforeend', element);


let json = {
    nombre: "miguel",
    apellido: "train",

}

let { apellido, ...joson } = json
console.log(json);
console.log(joson);


let array = ["samuel", "miguel", "pepe"];
function saludar(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
saludar(...array)