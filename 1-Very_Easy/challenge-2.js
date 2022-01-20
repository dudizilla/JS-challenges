/* Desafio nº 2
    Escreva uma função que recebe um número e retorna uma quantidade equivalente de 
	"chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição 
	(while, dowhile, for, etc)
*/

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

console.log(chunks(4)) //chunk-chunk-chunk-chunk
console.log(chunks(1)) //chunk
console.log(chunks(8)) //chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk
console.log(chunks(2)) //chunk-chunk
