const alunos  =[
    { nome: 'Maria', nota: 7.3, bolsista: false},
    { nome: 'Joao', nota: 3.3, bolsista: true },
    { nome: 'Mateus', nota: 9.8, bolsita: false},
    { nome: 'Ana', nota: 8.7, bolsista: true }

]


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista1).reduce(algumBolsista))