/* Desafio nº 15
    Escreva uma função que recebe uma string de algarismos romanos e seja capaz de traduzir seu
  conteúdo retornando o inteiro decimal correspondente.
*/

function sumValues(accum, current, index, array) {
  return current < array[index + 1] ? accum - current : accum + current
}

function romanNumeral(str) {
  const numeralsArray = str.split('')

  const romanDecimalMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  
  const decimalsArrays = numeralsArray.map(numeral => romanDecimalMap[numeral])

  return decimalsArrays.reduceRight(sumValues)
}

console.log(romanNumeral('XLVII')) //47
console.log(romanNumeral('CDXXXVIII')) //438
console.log(romanNumeral('CMIX')) //909
console.log(romanNumeral('MMMCMXCIX')) //3999
