const guardarDatosCompra = (datos) => {
    localStorage.setItem('compra', JSON.stringify(datos))
};

const cargarDatosCompra = () =>{
    return JSON.parse(localStorage.getItem('compra') || {})
};

const completarCamposCompra = () => {
    let resultado = document.getElementById("resultadoCompra1");
    let mensaje = `<div class="alert alert-danger mt-3" role="alert"><p>Error! Debes completar todos los campos!</p></div>`;
    resultado.innerHTML = mensaje;  
};

const compraFinalizada = () => {
    let resultado = document.getElementById("resultadoCompra1");
    let mensaje = `<div class="alert alert-success mt-3" role="alert"><p>Gracias por su compra!</p>
        <div class="card mb-3" style="max-width: 18rem;">
            <div class="card-body text-dark">
                <h5 class="card-title">Te dejamos nuestro numero de WhatsApp!</h5>
                <p class="card-text">Nuestros harios de atencion:<br><b>09 a 13hs - 15 a 18hs</b></p>
                <a href="https://api.whatsapp.com/send/?phone=34620118075&text=Hola%2C+quisiera+tener+informaci%C3%B3n+sobre%E2%80%A6&type=phone_number&app_absent=0">Hace click aca para ir a WhatsApp</a>
            </div>
        </div>
    </div>`
    resultado.innerHTML = mensaje;
};

const datosClienteCompra = () =>{
    let nombre = document.getElementById('nombreCliente').value;
    let apellido = document.getElementById('apellidoCliente').value;
    let telefono = document.getElementById('telefonoCliente').value;
    let direccionDeEntrega = document.getElementById('direccionDeEntrega').value;
    let Datos_referenciaEntrega = document.getElementById('Datos_referenciaEntrega').value;

    const productos_carrito = cargarProductosCarrito();
    const datosClienteCompra = {nombre:nombre, apellido:apellido, telefono:telefono, direccionDeEntrega:direccionDeEntrega, Datos_referenciaEntrega:Datos_referenciaEntrega, productos_carrito}

    if((nombre!= '') & (apellido != '')& (telefono != '') & (direccionDeEntrega != '') & (Datos_referenciaEntrega != '')){
        guardarDatosCompra(datosClienteCompra)
        compraFinalizada()
    }else{
        completarCamposCompra();
    } 
    
};
document.getElementById('btnFinalizarCompra').addEventListener('click',datosClienteCompra);

const renderProductosCompra = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida = `<table class="table">
        <tbody>
        </tr>`;
        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="50" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X $${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>`;
        }
        salida += `<tr>
        <td colspan="3"><b>Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        </tr>
        </tr>
        </tbody>
        </table>`;
    document.getElementById("CompraFinalizada").innerHTML = salida;
}
renderProductosCompra();