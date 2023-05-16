const imagens = document.querySelectorAll('img.item')

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        let streaming = {
            nome: imagem.dataset.nome,
            src: imagem.src
            
        }
        localStorage.setItem('streaming', JSON.stringify(streaming))
        // console.log(serie)
        location.href = 'meu-streaming.html'
    })
});