const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida = "";

    if (totalCarrito() > 0) {    
        salida = `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-end"><a href="#" class="btn btn-dark" onClick="vaciarCarrito()">Vaciar Carrito <img src="images/trash3.svg" alt="Vaciar Carrito" width="16" /></a></td>
        </tr>`;

        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><button class="btn btn-dark rounded-circle" title="Eliminar Item" onClick="eliminarItemProducto(${producto.id})"> - </button><span class="border-top border-bottom "> ${producto.cantidad} </span><button class="btn btn-dark rounded-circle" title="Agregar Item" onClick="agregarItemProducto(${producto.id})"> + </button></td>
            <td class="align-middle">${producto.cantidad} X $${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>
            <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarProducto(${producto.id});"><img src="images/trash3.svg" alt="Eliminar Producto" width="16" /></a></td>`;
        }

        salida += `<tr>
        <td colspan="4"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td colspan="6" class="text-end"><a href="finalizarCompra.html" class="btn btn-dark" onClick="finalizarCompra()">Finalizar Compra</a></td>
        </tr>
        </tr>
        </tbody>
        </table>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }

    document.getElementById("productos_seleccionados").innerHTML = salida;
}

renderProductosCarrito();
renderBotonCarrito();