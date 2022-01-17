function squareDigits(num) {
  const digitsArray = num.toString().split('')
  const powArray = digitsArray.map(digit => Number(digit) ** 2).join('')

  return Number(powArray)
}

console.log(squareDigits(3514)) //925116
console.log(squareDigits(94571)) //811625491
console.log(squareDigits(24)) //416
console.log(squareDigits(745821698)) //4916256441368164