/* Desafio nº 23
    Escreva um programa que recebe uma lista de classificação de nomes e uma string no formato "Nome +n"
  (ou -n), onde n é a quantidade de posições para subir ou descer na classifição, e retorna essa mesma
  lista com a classificação atualizada.

    A função também deve ser capaz de receber "Nome ELIMINATE", nesse caso o participante deve ser jogado
  para o fim da lista e deve ser acrescentado um "ELIMINATED" ao seu nome, indicando que ele foi eliminado.

    Os participantes eliminados não podem ter nanhum corredor não eliminado atrás deles na lista.

    Assuma que sempre receberá uma entrada válida no formato "Corredor AÇÃO"
*/

class Race {
  constructor(...racers) {
    this.racers = racers
  }

  getClassification() {
    const classification = {}

    for (let i = 0; i < this.racers.length; i++) {
      classification[i + 1] = this.racers[i];
    }

    return classification
  }

  updateClassification(str) {
    const [racer, action] = str.split(' ')

    if (action.includes('ELIMINATE')) {
      this.eliminateRacer(racer)
    } else {
      this.updateRacer(racer, action)
    }
  }

  updateRacer(racer, action) {
    const eliminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
    const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

    const currentPosition = active.indexOf(racer)
    const updatedPosition = currentPosition + Number(action) * -1

    if (updatedPosition >= this.racers.length || updatedPosition < 0) {
      console.log('Error! Invalid action.')
      return
    }

    active.splice(currentPosition, 1)

    this.racers = [...active.slice(0, updatedPosition), racer, ...active.slice(updatedPosition), ...eliminated]
  }

  eliminateRacer(racer) {
    const eliminated = this.racers.filter(racer => racer.includes('ELIMINATED'))
    const active = this.racers.filter(racer => !racer.includes('ELIMINATED'))

    active.splice(active.indexOf(racer), 1)

    this.racers = [...active, `${racer} ELIMINATED`, ...eliminated]
  }
}

const race1 = new Race("Alfa", "Beta", "Gama", "Delta") 

race1.updateClassification("Beta +1")
console.log(race1)

race1.updateClassification("Gama -1")
console.log(race1)

race1.updateClassification("Delta ELIMINATE")
console.log(race1)

race1.updateClassification("Gama +2")
console.log(race1)

console.log(race1.getClassification())
