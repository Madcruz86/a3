let formulario = document.querySelector('#form-cadastro');
let nome = document.querySelector('#cadastro-nome');
let email = document.querySelector('#cadastro-email');
let senha = document.querySelector('#cadastro-senha');
let aniversario = document.querySelector('#cadastro-data');
let botaoSubmit = document.querySelector('#cadastro-enviar');


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let cadastro = {
        "nome": nome.value,
        "email": email.value,
        "senha": senha.value,
        "aniversario": aniversario.value,
    }

    localStorage.setItem('cadastro', JSON.stringify(cadastro))
    location.href = 'login.html'+'#CadastroEfetuado'
})