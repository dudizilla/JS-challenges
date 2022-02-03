/* Desafio nº 24
    Escreva uma função que recebe uma string e verifica se ela atende aos seguintes requisitos:
  -Deve conter entre 4 e 32 caracteres;
  -Deve conter apenas letras (sem acentos), números ou _;
  -Deve começão com uma letra;
  -Não pode terminar com _;
  -Deve conter pelo menos um de cada tipo de caractere (letra, número e underscore)
  -Deve ser único (Para isso pode-se utilizar qualquer meio que achar válido para simular um banco de dados,
    como um array contendo vários nomes fictícios para comparação, por exemplo);
  -Caso atenda, retorne true, caso não atenda, retorne false.
*/

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

