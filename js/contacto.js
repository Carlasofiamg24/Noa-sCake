const guardarDatosConsulta = (datos) => {
    localStorage.setItem('consulta', JSON.stringify(datos))
};

const cargarDatosConsulta = () =>{
    return JSON.parse(localStorage.getItem('consulta') || {})
};

const completarCampos = () => {
    let resultado = document.getElementById("resultadoForm");
    let mensaje = `<div class="alert alert-danger" role="alert"><p>Error! Debes completar todos los campos!</p></div>`;
    resultado.innerHTML = mensaje;  
};

const enviarConsulta = () => {
    let resultado = document.getElementById("resultadoForm");
    let mensaje = `<div class="alert alert-success" role="alert"><p>Su consulta a sido enviada con exito!</p>
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


const datosConsulta = () =>{
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let consulta = document.getElementById('contulta').value;
    const datosConsulta = {nombre:nombre,telefono:telefono, email:email, consulta:consulta}

    if((nombre!= '') & (email != '') & (consulta != '') & (telefono != '')){
        guardarDatosConsulta(datosConsulta)
        enviarConsulta()
    }else{
        completarCampos();
    } 
    
};

document.getElementById('btnDatosConsulta').addEventListener('click', datosConsulta)
renderBotonCarrito();

