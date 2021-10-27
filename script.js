let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let nomeOk = false
let emailOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtxtNomet = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk) {
        alert('Formulario enviado com sucesso')
    } else {
        alert('Preencha o formulario corretamente antes de enviar')
    }
}
