
let producto = '';
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;

alert('Bienvenidos a FrutoSecosGG!!');
do {
    producto = prompt('Queres comprar Almendras, Pasas de uva o Chocolate con mani?').toLowerCase();
    cantidad = parseInt(prompt('Cuantos queres comprar?'));


    while (isNaN(cantidad) || cantidad <= 0 ) {
        alert('Debe agregar una cantidad valida!!');
        cantidad = parseInt(prompt('Queres comprar Almendras, Pasas de uva o Chocolate con mani?'));
    }


switch(producto) {
    case 'Almendras':
    precio = 1000;
    break;
    case 'Pasas de uva':
        precio = 1500;
        break;
        case 'Chocolate con mani':
        precio = 2500;
        break;
        default:
        alert('El producto ingresado no es valido!');
        cantidad = 0;
}

    precioTotal += precio * cantidad;
    cantidadTotal += cantidad;

    seguirComprando = confirm('Desea seguir comprando?');

} while (seguirComprando);
console.log(precioTotal);
console.log(cantidadTotal);

alert('Ha comprado '+ cantidadTotal+' productos y el precio final es de $'+precioTotal);