function chunks(num) {
    if ( num === 0 ) {
        return ''
    } 

    return num === 1 ? 'chunk' : 'chunk-' + chunks(num -1)
}

console.log(chunks(4))
console.log(chunks(1))
console.log(chunks(8))
console.log(chunks(2))