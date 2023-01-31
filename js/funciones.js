const traerProductos = ()=>{
    fetch('js/productos.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        localStorage.setItem("productos", JSON.stringify(data));
    })
    .catch((error)=> console.log(error))
}


const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

traerProductos();



const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
};

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
};

//guardo en el localstorage el pruducto pra el render de la descripcion
const verProducto = (id) => {
    const producto = buscarProducto(id)
    localStorage.setItem('producto', JSON.stringify(producto))
    location.href = "ver-producto.html"
};

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem('producto'))
};

const estaEnElCarrito = (id) =>{
    const productos_carrito = cargarProductosCarrito()
    return productos_carrito.some(item => item.id === id)
};

const agregarAlCarrito = (id)=> {
    const productos = cargarProductosLS()
    const productos_carrito = cargarProductosCarrito()
    if(estaEnElCarrito(id)){
        let pos = productos_carrito.findIndex(item => item.id === id)
        productos_carrito[pos].cantidad += 1;
    }else{
        const producto = productos.find(item => item.id === id)
        producto.cantidad = 1
        productos_carrito.push(producto);

    }
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
};

const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito()
    const productos = productos_carrito.filter(item => item.id !== id)
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
};

const vaciarCarrito = () => {
    localStorage.removeItem('carrito');
    renderProductosCarrito();
    renderBotonCarrito();
};

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito()
    return productos_carrito.reduce((total, item) => total += item.cantidad, 0)
};

const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito()
    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0)
};


const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn position-relative">
        <img src="images/basket.svg" alt="Carrito" width="24">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}


//botones de aumentar o decrementar productos 
const agregarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito()
    let pos = productos_carrito.findIndex(item => item.id === id)
    productos_carrito[pos].cantidad += 1;
    guardarProductosCarrito(productos_carrito);
    renderProductosCarrito();
    renderBotonCarrito();

};

const eliminarItemProducto = (id) => {
    const productos_carrito = cargarProductosCarrito()
    let pos = productos_carrito.findIndex(item => item.id === id)
    productos_carrito[pos].cantidad -= 1;
    
    if(productos_carrito[pos].cantidad == 0){
        eliminarProducto(id)
    }else{
        guardarProductosCarrito(productos_carrito);
        renderProductosCarrito();
        renderBotonCarrito();

    }
    
};

const buscarProducto = (id) => {
    const productos = cargarProductosLS();

    return productos.find(item => item.id === id);
}; 

