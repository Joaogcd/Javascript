function calcular(){
    var conta = document.getElementById('conta')
    var res = document.getElementById('res')
    var tabua = Number(conta.value)
    var c = 1
    res.innerHTML = ''
    if(tabua == ''){
        window.alert('Erro, preencha com um número.')
    } else{
        while(c <= 10){
            var item = document.createElement('option')
            var total =+ (tabua * c)
            item.text = (`${tabua} x ${c} = ${total}`)
            res.appendChild(item)
            c++      
        }
    }  
}

