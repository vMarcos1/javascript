var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`) 
if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
    
} else if (hora <= 23 && hora >= 19 ) {
    console.log('Boa noite!')
    
} else {
    console.log('O horario foi digitado incorretamente')
}