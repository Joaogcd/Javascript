var frutas = ['maçã', 'banana', 'manga', 'uva']

frutas.push('cereja')   /* Adicionar ao final */

frutas.unshift('morango')   /* Adicionar ao inicio */

frutas.pop()    /* Remover o ultimo elemento adicionado */

console.log(Array.isArray(frutas))  /* Descobrir se é uma arrey/vetor */

console.log(frutas.indexOf('manga'))    /* Mostrar onde o elemento está na arrey */

console.log(frutas)