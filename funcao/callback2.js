const notas = [7.7, 6.5, 3.2, 6.3, 6.6, 3.1]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7 ) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

notasBaixas1 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas1)


const notasMenorQue7 = nota => nota <= 7
const notasBaixas2 = notas.filter(notasMenorQue7)
console.log(notasBaixas2)