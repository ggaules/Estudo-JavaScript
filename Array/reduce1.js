const alunos  =[
    { nome: 'Maria', nota: 7.3, bolsista: false},
    { nome: 'Joao', nota: 3.3, bolsista: true },
    { nome: 'Mateus', nota: 9.8, bolsita: false},
    { nome: 'Ana', nota: 8.7, bolsista: true }

]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)