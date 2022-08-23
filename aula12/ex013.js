var agora = new Date()
var diasem = agora.getDay()
switch(diasem){
    case 0:
        console.log('Bom dia, hoje é Domingo')
        break
    case 1:
        console.log('Bom dia, hoje é Segunda-feira')
        break
    case 2:
        console.log('Bom dia, hoje é Terça-feira')
        break
    case 3:
        console.log('Bom dia, hoje é Quarta-feira')
        break
    case 4:
        console.log('Bom dia, hoje é Quinta-feira')
        break
    case 5:
        console.log('Bom dia, hoje é Sexta-feira')
        break
    case 6:
        console.log('Bom dia, hoje é Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido [ERRO]')
        break
}