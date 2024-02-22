function clicar() {
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'bebem.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosom.png')
            }
                
           

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'adultof.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos`
        res.appendChild(img)
        

    }



}