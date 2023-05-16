const botaoDeletar = document.querySelector('#botao-deletar')
const botaoAtualizar = document.querySelector('#caixa-adicionar')
let modalDeleta = document.querySelector('#div-alerta')
let modalDeletaConfirma = document.querySelector('#div-alerta-deletado')
let modalAtualiza = document.querySelector('#div-atualiza')
let modalAtualizaConfirmacao = document.querySelector('#div-atualiza-confirmacao')
let botaoFecharAtualizar = document.querySelector('#botao-voltar-atualizar')
let botaoClose = document.querySelectorAll('.close-btn')
let botaoConfirmarDeletar = document.querySelector('#botao-confirmar-deletar')
let botaoConfirmarAtualizar = document.querySelector('#botao-confirmar-atualizar')
let botaoredireciona = document.querySelector('#close-redireciona')


botaoredireciona.addEventListener('click', () => {
    location.href = 'minhas-series.html'
})


botaoConfirmarAtualizar.addEventListener('click', () => {
    modalAtualiza.style.display = "none"
    modalAtualizaConfirmacao.style.display = "block"
})


botaoAtualizar.addEventListener('click', () => {
    modalAtualiza.style.display = "block"
})

document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape'){
        modalDeleta.style.display = 'none'
    }
})


botaoFecharAtualizar.addEventListener('click', () => {
        modalAtualiza.style.display = 'none'
})

botaoClose.forEach(element => {
    element.addEventListener('click', () => {
        modalDeleta.style.display = 'none'
        modalAtualiza.style.display = 'none'
        modalAtualizaConfirmacao.style.display = "none"
    })
});
