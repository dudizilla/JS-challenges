/* Desafio nº 5
    Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética 
  em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial,
  apenas letras e espaços.
*/

function letter(str) {	
  const lowerCaseString = str.toLowerCase()
	const lettersArray = lowerCaseString.split('')
  const sortedLetters = lettersArray.sort()
  
  return sortedLetters[sortedLetters.length - 1]
}

console.log(letter('Lorem ipsum dolore sec avanti')) // 'v'
console.log(letter('Hello')) //o
console.log(letter('May the force be with you')) //y
console.log(letter('Its over nine thousand')) //v
