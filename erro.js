function imprimirNoemGritando(obj) {
    throw new Error('...')
    throw 10
    throw true
    throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
    
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroeLancar(e)
        
            console.log('final')
        }
    }

const obj = { nome: 'Roberto'}
imprimirNoemGritando(obj)