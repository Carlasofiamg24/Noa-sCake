const renderProducto = () => {
    const producto = cargarProducto();
    let salida = `<div class="col-md-6 text-center">
            <img src="images/${producto.imagen}" alt="${producto.nombre}" class="img-fluid" title="${producto.nombre}" />
        </div>
        <div class="col-md-6">
            <h1 class="fw-bold">${producto.nombre}</h1>
            <p>${producto.descripcion}</p>
            <p><b>$${producto.precio}</p>
            <p><a href="#" class="btn btn-dark" onClick="agregarAlCarrito(${producto.id});" title="Agregar al Carrito">Agregar (+)</a></p>
        </div>`;

    document.getElementById("producto").innerHTML = salida;
}

renderProducto();
renderBotonCarrito();
