/* Desafio nº 25
    Escreva uma função que recebe uma string, verifica se ela possui uma distribuição válida de parênteses,
  colchetes e chaves, e retorna true ou false baseada nessa varificação.

    A função deve ser capaz de funcionar com qualquer string independente do conteúdo que acompanha os
  caracteres.
*/
function bracketCheck(str) {
  let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join('')

  while (brackets.match(/\(\)|\[\]|\{\}/)) {
    brackets = brackets.replace(/\(\)|\[\]|\{\}/, '')
    console.log(brackets)
  }

  return brackets.length === 0
}

console.log(bracketCheck('((((([(]))))))')) //false
console.log(bracketCheck('{(){([]){[]}()()()()[]}(){(())}(())}')) //true
console.log(bracketCheck(`
const database = ['erick_14', 'pam_ls2', 'VICTOR_99A']

function validateUser(username) {
  if (username.length < 4 || username.length > 32) {
    console.log('Tamanho inválido.\n')
    return false
  }

  if (username.match(/\W/)) {
    console.log('Caracteres inválidos.\n')
    return false
  }

  if (username.match(/^[0-9]|^_/)) {
    console.log('Caracteres inválidos.\n')
    return false
  }

  if (username.match(/_$/)) {
    console.log('Caracteres inválidos.\n')
    return false
  }

  if (! (username.match(/[A-Za-z]/) && username.match(/[0-9]/) && username.match(/_/)) ) {
    console.log('É necessário um de cada tipo de caractere.\n')
    return false
  }

  const usernameAlreadyExists = database.indexOf(username) !== -1

  if (usernameAlreadyExists) {
    console.log('Nome de usuário já existe.\n')
    return false
  }

  return true
}

console.log(validateUser('52alfred')) //false
console.log(validateUser('erick_14')) //false
console.log(validateUser('josh_g15')) //true
console.log(validateUser('hugo123_')) //false
console.log(validateUser('k_9')) //false
`)) //true

console.log(bracketCheck(`
function insertIntoString(str, toInsert, indexes) {  
  const charsArray = str.split('')
  let insertCount = 0

  for (let i = 0; i <= str.length; i++) {
    if (indexes.includes(i)) {
      charsArray.splice(i + insertCount, 0, toInsert)
      insertCount++
    }
  }

  return charsArray.join('')
}
 
console.log(insertIntoString('capaz utilizar as cápsulas emergência', 'de ', [6, 27]))
console.log(insertIntoString('Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para [...]', ',', [13,45]))
console.log(insertIntoString('Hello', 'world', [6]))
console.log(insertIntoString('Isso é um teste', 'não', [])))
`)) //false
