function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#fea75b'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ec5d08'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#60425d'
    }
}