function gerar() {
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltabu')
     if (numero.value.length == 0) {
        alert('[ERRO] Preencha os dados')
       
        
     } else {
        let num = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
           let item = document.createElement('option')
           item.text = `${num} x ${c} = ${num*c}`
           item.value = `tab${c}`
           tab.appendChild(item)
           c++

        }
     }


}