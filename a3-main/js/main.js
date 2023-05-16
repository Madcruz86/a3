const botoes = document.querySelectorAll('button')

botoes.forEach(botao => {
    botao.addEventListener('click', (e) => {
        destino = e.target.dataset.funcao
        window.location.href = destino+'.html'
    })
});
