const produto = new Object
produto.nome = 'cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor:89000,
    endereco: {
        lagradouro: 'Rua pico',
        numero: 113
    }
}


carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']
console.log(carro)