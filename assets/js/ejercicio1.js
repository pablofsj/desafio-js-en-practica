
const form = document.querySelector("#formulario")
const nombre = document.querySelector('#nombre');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const resultado = document.querySelector('.resultado');
const errorNombre = document.querySelector('.errorNombre');
const errorAsunto = document.querySelector('.errorAsunto');
const errorMensaje = document.querySelector('.errorMensaje');
const regex = /^[a-zA-Z]+$/;


const validarRegex = (input, error) => {
    if (!regex.test(input.value)) {
        error.textContent = `Ingresa caracteres desde la "a" hasta la "z" en mayúsculas o minúsculas en el campo "${input.id}"`;
        return false
    } else {
        return true
    }
};

const validarVacio = (input, error, msje) => {
    if (input.value === '') {
        error.textContent = msje;
        return false
    } else {
        return true
    }
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreRegexValido = validarRegex(nombre, errorNombre);
    const asuntoRegexValido = validarRegex(asunto, errorAsunto);
    const mensajeRegexValido = validarRegex(mensaje, errorMensaje);
    const nombreValido = validarVacio(nombre, errorNombre, 'El nombre es requerido.');
    const asuntoValido = validarVacio(asunto, errorAsunto, 'El asunto es requerido.');
    const mensajeValido = validarVacio(mensaje, errorMensaje, 'El mensaje es requerido.');


    if (nombreValido && asuntoValido && mensajeValido && nombreRegexValido && asuntoRegexValido && mensajeRegexValido) {
        resultado.innerHTML = '<p>Mensaje enviado con éxito !!!</p>'
        errorNombre.textContent = ''
        errorAsunto.textContent = ''
        errorMensaje.textContent = ''
    }
    else { resultado.innerHTML = ''; }

});



