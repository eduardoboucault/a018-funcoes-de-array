//* Exercício 2

const arrayNumeros = [3, 5, 6, 9, 12, 18, 27, 31]

//? A)

const numerosMultiplicadosPor3 = arrayNumeros.map((num) => {
    return num * 3
})

console.log(numerosMultiplicadosPor3)

//? B)

const numerosDivididosPorDois = arrayNumeros.map((num) => {
    return num / 2
})

console.log(numerosDivididosPorDois)

 //! O método .map(), é um método de array, onde como argumento desse método nós passamos uma callback, seguido do seu respectivo parâmetro. Seu parâmetro funciona como um iterador, passando de elemento em elemento dentro de um array e retornando a ação a ser executada pelo parâmetro.
