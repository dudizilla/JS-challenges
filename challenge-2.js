function chunks(num) {
    if ( num === 0 ) {
        return ''
    } 

    if ( num === 1 ) {
        return 'chunk'
    } else {
        return 'chunk-' + chunks(num - 1)
    }
}

console.log(chunks(4))
console.log(chunks(1))
console.log(chunks(8))
console.log(chunks(2))