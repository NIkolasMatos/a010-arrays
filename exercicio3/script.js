// nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const numeros = [2, 3, 7]
const strings= ['fabio', 'sal', 'paulitcha']
const misto = ['nikolas', 4, true]
const copia1 = numeros.slice()
const copia2 = strings.slice()
const copia3 = misto.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
copia1.push(6)
console.log(copia1)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
copia2.pop()
console.log(copia2)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
copia3.splice(1,1)
console.log(copia3)
