function calcular(){
    var comeco = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')   
    var res = document.getElementById('res')
    if(comeco.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(comeco.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } 
        res.innerHTML += `\u{1F3C1}`  
    }
}