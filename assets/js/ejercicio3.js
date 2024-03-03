
const valor1 = document.querySelector('#valor1')
const valor2 = document.querySelector('#valor2')
const suma = document.querySelector('#btn-sumar')
const resta = document.querySelector('#btn-restar')
const resultado = document.querySelector('.resultado')
const regex = /^-?\d*\.?\d+$/

suma.addEventListener('click', (event) =>{
    event.preventDefault()
    if (!regex.test(valor1.value) || !regex.test(valor2.value)){
        alert('porfavor ingresar solo numeros')
        return
    }
    const resultadoSuma = parseFloat(valor1.value) + parseFloat(valor2.value)
    resultado.textContent = resultadoSuma
})

resta.addEventListener('click', (event) =>{
    event.preventDefault()
    if (!regex.test(valor1.value) || !regex.test(valor2.value)){
        alert('porfavor ingresar solo numeros')
        return
    }
    const resultadoResta = parseFloat(valor1.value) - parseFloat(valor2.value)
    if(resultadoResta < 0){
        resultado.textContent = 0
    }else {
        resultado.textContent = resultadoResta
    }
})

