/* Desafio nº 6
    Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras
  minúsculas, porém com as palavras na mesma ordem.
    Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas
  letras e espaços
*/

function invert(str){
  const wordsArray = str.split(' ')
  const invertedWords = wordsArray.map((word) => {
    const lowerCaseWord = word.toLowerCase()

    return lowerCaseWord.split('').reverse().join('')
  })

  return invertedWords.join(' ')
}

console.log(invert('Lorem ipsum dolore sec avanti')) // merol muspi erolod ces itnava
console.log(invert('This is an apple')) //siht si na elppa
console.log(invert('May the force be with you')) //yam eht ecrof eb htiw uoy
console.log(invert('Its over nine thousand')) //sti revo enin dnasuoht
