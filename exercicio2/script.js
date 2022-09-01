// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)

const numeros = [2, 3, 7]
const strings= ['fabio', 'sal', 'paulitcha']
const misto = ['nikolas', 4, true]
console.log((numeros).length)
console.log((strings).length)
console.log((misto).length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array
console.log(numeros[0])
console.log(strings[1])
console.log(misto[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(numeros.includes(2))
console.log(misto.includes('papai'))