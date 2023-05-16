let formularioLogin = document.querySelector('#form-login');
let areaLogin = document.querySelector('#area-login');
let areaSenha = document.querySelector('#area-senha');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let esqueciSenha = document.querySelector('#esqueci-senha')
let voltarLogin = document.querySelector('#voltar-login')

esqueciSenha.addEventListener('click', () => {
    areaLogin.hidden = true
    areaSenha.hidden = false
})
voltarLogin.addEventListener('click', () => {
    areaLogin.hidden = false
    areaSenha.hidden = true
})

formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const cadastro = JSON.parse(localStorage.getItem('cadastro'))
    
    if (cadastro['email'] == email.value && cadastro['senha'] == senha.value){
        location.href = 'principal.html'
    }
})