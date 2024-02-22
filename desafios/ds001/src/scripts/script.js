function carregar() {
    var mensagem = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    mensagem.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora <=12) {
        img.src = 'imgdia.png'
        document.body.style.background = '#d5e1cd'
        

    } else if (hora >= 13 && hora <= 18) {
        img.src = 'imgtarde.png'
        document.body.style.background = '#ffd68e'

    } else if (hora >= 19 && hora <= 23) {
        img.src = 'imgnoite.png'
        document.body.style.background = '#9d96a8'

    }
}
