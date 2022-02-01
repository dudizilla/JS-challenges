/* Desafio nº 21
    Escreva uma classe que seja capaz de armazenar 3 coordenadas, determinar o setor em que se
  encontram suas coordenadas e sua distância em relação à estação espacial (coordenada[0, 0, 0])'

    Distribuição dos setores:
  -Alfa: [positivo, positivo, positivo]
  -Beta: [positivo, positivo, negativo]
  -Gama: [positivo, negativo, positivo]
  -Delta: [positivo, negativo, negativo]
  -Épsilon: [negativo, positivo, positivo]
  -Zeta: [negativo, positivo, negativo]
  -Sigma: [negativo, negativo, positivo]
  -Ômega: [negativo, negativo, negativo]

  Considere 0 como positivo para garantir que um ponto estará apenas e um único setor.
*/

class Location {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
  }

  getSector() {
    if (this.x >= 0 && this.y >= 0 && this.z >= 0){
      return 'Alfa'
    }

    if (this.x >= 0 && this.y >= 0 && this.z < 0) {
      return 'Beta'
    }

    if (this.x >= 0 && this.y < 0 && this.z >= 0) {
      return 'Gama'
    }

    if (this.x >= 0 && this.y < 0 && this.z < 0) {
      return 'Delta'
    }

    if (this.x < 0 && this.y >= 0 && this.z >= 0) {
      return 'Épsilon'
    }

    if (this.x < 0 && this.y >= 0 && this.z < 0) {
      return 'Zeta'
    }

    if (this.x < 0 && this.y < 0 && this.z >= 0) {
      return 'Sigma'
    }

    if (this.x < 0 && this.y < 0 && this.z < 0) {
      return 'Ômega'
    }
  }

  getDistance() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2) + (this.z ** 2))
  }
}

const point1 = new Location(37, 42, 15)
const point2 = new Location(144, 49, 0)
const point3 = new Location(-37, 0, 0)
const point4 = new Location(-19, -80, -32)


console.log(point1.getSector(), `\nDistance: ${point1.getDistance()} units\n`)
console.log(point2.getSector(), `\nDistance: ${point2.getDistance()} units\n`)
console.log(point3.getSector(), `\nDistance: ${point3.getDistance()} units\n`)
console.log(point4.getSector(), `\nDistance: ${point4.getDistance()} units\n`)
