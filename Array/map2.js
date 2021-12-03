const carrinho = [
    '{"nome": "borracha", "preco": 3.54 }',
    '{"nome: "caderno, "preco: 13.90 }',
    '{"nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)