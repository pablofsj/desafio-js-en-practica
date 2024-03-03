
const botones = document.querySelectorAll('button')
const caja = document.querySelector('#caja')

function cambiaColor (boton){
    boton.addEventListener('click', function(event) {
        event.preventDefault()
        caja.style.backgroundColor = `${this.style.backgroundColor}`;
    })
}

botones.forEach(boton => {
    cambiaColor(boton)
});

