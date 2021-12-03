const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa saiu (remove ultimo elemento do array)

console.log(pilotos)

pilotos.push('Verstappen') // coloca no final
console.log(pilotos)

pilotos.shift() //remove primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') //adicionar
console.log(pilotos)

pilotos.splice(3, 1) //remover
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4)
console.log(algunsPilotos2)
