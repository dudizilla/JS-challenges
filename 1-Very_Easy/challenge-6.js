function invertWords(word) {
  return word.toLowerCase().split('').reverse().join('')
}

function invertWords(str) {
  return str.split(' ').map(invertWord).join(' ')
}
console.log(invert('Lorem ipsum dolore sec avanti')) // merol muspi erolod ces itnava
console.log(invert('This is an apple')) //siht si na elppa
console.log(invert('May the force be with you')) //yam eht ecrof eb htiw uoy
console.log(invert('Its over nine thousand')) //sti revo enin dnasuoht