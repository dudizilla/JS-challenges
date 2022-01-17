function letter(str) {
  const sortedArray = str.toLowerCase().split('').sort()
  return sortedArray[sortedArray.length - 1]
}

console.log(letter('Lorem ipsum dolore sec avanti')) // 'v'
console.log(letter('Hello')) //o
console.log(letter('May the force be with you')) //y
console.log(letter('Its over nine thousand')) //v