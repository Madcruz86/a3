const nome = document.querySelector('#nome-usuario')
const email = document.querySelector('#email-usuario')
const data = document.querySelector('#data-usuario')
const formulario = document.querySelector('#form-troca-senha')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    
})

let cadastro = JSON.parse(localStorage.getItem('cadastro'))

nome.value = cadastro.nome
email.value = cadastro.email
data.value = cadastro.aniversario