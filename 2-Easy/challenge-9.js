function checkBalance(str) {
  const charCount = {}

  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1
  }

  return Object.values(charCount).every((count, index, array) => index !== 0 ? count === array[index - 1] : true)
}

console.log(checkBalance('This is Thee')) //true
console.log(checkBalance('ssd')) //false
console.log(checkBalance('Lorem ipsum')) //false
console.log(checkBalance('QQwweerrttyy')) // true
