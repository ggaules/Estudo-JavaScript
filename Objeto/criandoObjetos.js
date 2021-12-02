const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco *(1 - desc)

    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

function criarFuncionario(nome, salarioBase, faltas) {
    nome,
    salarioBase,
    faltas,
    getSalario() 
}



const f1 = criarFuncionario('Joao', 7900, 4)
const f2 = criarFuncionario('Maria', 2999, 1)

console.log(f1.getSalario(), f2.getSalario())

