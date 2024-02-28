function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var de = document.getElementById('de')
    var cont = document.getElementById('cont')

    if (ini.value.length == 0 || fim.value.length == 0 || de.value.length == 0) {
        cont.innerHTML = 'Preencha todos os campos!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        cont.innerHTML = 'Contando: <br>'
        let inicio = Number(ini.value)
        let final = Number(fim.value)
        let passo = Number(de.value)

        if (inicio < final) {
            for (let c = inicio; c <= final; c += passo) {
                cont.innerHTML += `${c}\u{1f449} `
    
            }
        } else {
            for (let c = inicio; c >= final; c -= passo) {
                cont.innerHTML += `${c} \u{1f449} `
            }
        }

        
        cont.innerHTML += `\u{1f3c1}`
    }
}