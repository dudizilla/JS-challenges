function invertWords(word) {
  return word.toLowerCase().split('').reverse().join('')
}

function invertWords(str) {
  return str.split(' ').map(invertWord).join(' ')
}