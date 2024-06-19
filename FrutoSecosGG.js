let producto = '';
let cantidad = 0;
let precio = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;

    alert('Bienvenido a GGFrutoSecos');
do {
    producto = prompt('Queres comprar Mani, Almendras o Ambos?').toLowerCase();
    cantidad = parseInt(prompt('Cuantos queres comprar?'));


    while (isNaN(cantidad) || cantidad <= 0 ) {
        alert('Debe agregar una cantidad valida!!');
        cantidad = parseInt(prompt('Cuantos queres comprar?'));
    }


switch(producto) {
    case 'mani':
    precio = 1000;
    break;
    case 'almendras':
        precio = 1500;
        break;
        case 'ambos':
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
