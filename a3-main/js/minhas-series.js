const imagens = document.querySelectorAll('img.item')

imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
        let serie = {
            nome: imagem.dataset.nome,
            genero: imagem.dataset.genero,
            streaming: imagem.dataset.streaming,
            src: imagem.src
        }
        localStorage.setItem('serie', JSON.stringify(serie))
        // console.log(serie)
        location.href = 'minha-serie.html'
    })
});