//* Exercício 1

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//* a)

const palavrasCaixaAlta = (parametro) => {
    let valoresCaixaAlta = ''
    for (i in parametro) {
        valoresCaixaAlta += `\n${parametro[i].toUpperCase()}`
    }
    return valoresCaixaAlta
}

// console.log(palavrasCaixaAlta(objeto))

//* b)

const textoCorrido = (parametro) => {
    const res = `${parametro.nome} ${parametro.profissao} ${parametro.username} ${parametro.senha}`
    return res
}

// console.log(textoCorrido(objeto))

//* c)

const imprimirObjeto = (objeto, callback) => {
    const res = callback(objeto)
    console.log(res)
}

imprimirObjeto(objeto, palavrasCaixaAlta)
console.log(' ')
imprimirObjeto(objeto, textoCorrido)

//! A função imprimirObjeto recebe 2 parâmetros (os nomes dos parâmetros foram escolhidos por questão de didática), dentro do meu escopo de execução da função eu retorno meu parâmetro como função, e o parâmetro dessa função é meu objeto.