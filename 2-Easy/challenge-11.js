/* Desafio nº 11
    Escreva uma função que receba um par ordenado (x, y) e retorne um array de pares (x, y) onde cada
  um deles possui x e y menor ou igual ao par recebido em ordem crescente.
    Os pares devem ser ordenados de forma que primeiro aumente o valor de y e depois o valor de x.
    Apenas o quadrante onde x e y s"ao positivos deve ser considerado.
*/

function smallerPair(pair) {
  const result = []

  for (let i = 0; i < pair[0]; i++) {
    for (let j = 0; j < pair[1]; j++) {
      result.push([i, j])
    }
  }

  return result
}

console.log(smallerPair([2, 2]))
console.log(smallerPair([2, 7]))
console.log(smallerPair([-3, -3]))
console.log(smallerPair([7, 6]))
