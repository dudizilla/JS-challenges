/* Desafio nº 22
    Escreva uma função que recebe uma lista embaralhada de números únicos de 1 até n no formato "0001"
  (string com zeros à esquerda), verifique se há elementos faltando (onde n nunca estará faltando) e,
  caso hajam, retorne os elementos faltantes.
*/

function missingPrisoners(arr) {
  const sorted = arr.slice(0).sort((a, b) => a - b)
  const total = Number(sorted[sorted.length - 1])

  const allPrisoners = []

  for (let i = 0; i < total; i++) {
    const prisoner = i + 1

    allPrisoners.push(prisoner.toString().padStart(4, '0'))    
  }

  const missingPrisoners = []

  allPrisoners.forEach(prisoner => {
    if (!sorted.includes(prisoner)) {
      missingPrisoners.push(prisoner)
    }
  })
  
  return missingPrisoners
}

console.log(missingPrisoners(['0020', '0002', '0013', '0004', '0001', '0016', '0015', '0006', '0012', '0012', '0007', '0005', '0008', '0011', '0010'])) //['0003', '0009', '0014', '0017', '0018', '0019']
console.log(missingPrisoners(['0020', '0009', '0002', '0013', '0004', '0017', '0001', '0003', '0016', '0015', '0019', '0006', '0012', '0007', '0005', '0014', '0008', '0011', '0010', '0018'])) //[]
console.log(missingPrisoners(['0004', '0002', '0005', '0003'])) //['0001']
console.log(missingPrisoners([])) //[]
