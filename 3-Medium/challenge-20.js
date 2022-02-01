/* Desafio nº 20
    Escreva uma função que receba um array de opções e retorne um array bidimensional de todas as senhas
  possíveis utilizando todos os elementos passados. Faça isso utilizando recursão.
*/

function possiblePasswords(arr) {
  if (arr.length === 0) {
    return [[]]
  }

  const removedChar = arr[0]
  const partialChars = arr.slice(1)

  const partialPossibilities = possiblePasswords(partialChars)

  const allPossibilities = []

  partialPossibilities.forEach(partialPossibility => {
    for (let i = 0; i <= partialPossibility.length; i++) {
      const completePossibility = [...partialPossibility.slice(0, i), removedChar, ...partialPossibility.slice(i)]
      allPossibilities.push(completePossibility)
    }
  })

  return allPossibilities
}

console.log(possiblePasswords(["X", "s", "-", "#"]))
console.log(possiblePasswords(["1", "2", "3"])) // [['1', '2', '3'], ['2', '1', '3'], ['1', '3', '2'], ['3', '1', '2'], ['3', '2' '1']]
console.log(possiblePasswords([])) // []
