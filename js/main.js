function sumarProductos (precioUnitario, cantidadDeseada){
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}

let precio = 50000;
let cantidad = 4;
let totalCompra = sumarProductos(precio,cantidad);
console.log("EL total gastado en el producto es de :" + totalCompra)