// novo recurso

const pessoa = {
    nome: 'ana',
    idade: 5,  
    endereco: {
        lagradouro: 'Rua ABC',
        numero: 10
    }

}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { lagradouro, numero, cep } } = pessoa
console.log(lagradouro, numero, cep)
