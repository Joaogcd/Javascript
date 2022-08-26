function calcular(){
    var comeco = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')   
    var res = document.getElementById('res')
    var comeco1 = Number(comeco.value)
    var fim1 = Number(fim.value)
    var passo1 = Number(passo.value)
    res.innerHTML = ''
    if(fim1 < comeco1){
        res.innerHTML += (`Fim`)
        while (comeco1 >= fim1){
            res.innerHTML += (` < ${fim1}`)
            fim1 += passo1      
        }
        
    } else if(passo1 == 0 && comeco1 != 0 && fim1 != 0){
        window.alert('Passo inválido, o passo será considerado como 1.')
        passo1 = 1
        while (comeco1 <= fim1){
            res.innerHTML += (`${comeco1} \u{1F449} `)
            comeco1 += passo1
        } 
        res.innerHTML += (`\u{1F3C1}`)

    } else if(comeco1 != 0 && fim1 != 0){
        while (comeco1 <= fim1){
            res.innerHTML += (`${comeco1} \u{1F449} `)
            comeco1 += passo1
        } 
        res.innerHTML += (`\u{1F3C1}`)

    } else{
        res.innerHTML = ('Impossível contar.')
    }     
}