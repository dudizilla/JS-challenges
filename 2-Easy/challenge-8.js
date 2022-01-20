/* Desafio nº 8
    Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos
  os nomes, exceto o último, abreviados e o último nome em letras maiúsculas antes das abreviações e 
  separado por vírgula.
*/

function quotes(fullName) {
  const names = fullName.split(' ')
  let initials = ''

  for (let i = 0; i < names.length -1; i++){
    initials += ` ${names[i][0].toUpperCase()}.`
  }

  return `${names[names.length - 1].toUpperCase()},${initials}`

}

console.log(quotes('Isaac Larrubia Ferreira Pontes')) //'PONTES, I. L. F.'
console.log(quotes('John Ronald Reuel Tolkien')) //'TOLKIEN, J. R. R.'
console.log(quotes('christopher james paolini')) //'PAOLINI, C. J.'
console.log(quotes('Suzanne Marie Collins')) //'COLLINS. S. M.'
