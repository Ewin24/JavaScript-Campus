class Stack {
    constructor(tamaño) {
        this.tamaño = tamaño;
        this.items = {};

        this.contadorItems = 0
    }

    //metodos de manipulacion de datos

    push(elemento) {
        let mensaje = '';
        if (this.contadorItems < this.tamaño) {
            this.items[this.contadorItems + 1] = elemento;
            this.contadorItems++;
            mensaje = 'El elemento fue agregado de manera exitosa ' + this.contadorItems;
        } else {
            mensaje = 'No es posible agregar el elemento, pues superaria el tamaño maximo';
        }
        return mensaje;
    }

    pop() {
        //en este caso porque estamos usando como almacenamiento un {} podemos usar el contador como un id para eliminar el ultimo
        //pero si usamos un [] debemos usar el .length - 1 para poder eliminar el ultimo
        delete this.items[this.contadorItems];
        this.contadorItems--;
        return this.items;

    }

    peak() {
        return this.items[this.contadorItems];
    }

    listAll() {
        return this.items;
    }
    size() {
        return this.contadorItems;
    }

}

let stack = new Stack(5);
stack.push('menor');
stack.push('jose');
stack.push('manuel');
console.log(stack.listAll());
stack.pop();
console.log(stack.listAll());
console.log("La cima de la pila es: " + stack.peak());
console.log("El tamaño de la pila es: " + stack.size());
