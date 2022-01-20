/* Desafio nº 30
    Escreva uma aplicação que simula o funcionamento de uma planilha.
    Ela precisa armazenar um array bidimensional de células e possuir no mínimo quatro funções principais:
  -leitura de célula;
  -escrita de célula;
  -salvar em arquivo;
  -abrir de um arquivo.

    A leitura de uma célula deve receber o seu nome, que é uma string como "A2", "C4" ou "J1", onde a letra é
  a coluna e o número é a linha e retornar o valor da célula.

    As fórmulas devem ser strings no formasto FORMULA(células), onde as células podem ser selecionadas
  individualmente ou em grupo através dos caracteres ; e : respectivamente. Por exemplo, A2;A5 seria A2 E A5,
  já A2:A5 seria A2 até A5.

    Para ler e salvar em arquivos é possível utilizar o módulo "fs", incluído por padrão no Node.js

    Ao ler um arquivo o programa deve carregar a planilha para uso como no momento em que ela foi salva, mas a
  forma como ela será armazenada em arquivo é livre.

    A escrita de uma célula também pode receber o seu nome e uma fórmula. Nesse caso, deverá executar a fórmula
  e guardar o resutado na célula.

    Devem estar disponíveis as seguintes fórmulas:
  SUM: soma os valores das células passadas. Pode receber qualquer quantidade de células.
  SUB: subtrai os valores das células passadas. Pode receber qualquer quantidade de células, mas deve subtrair
  da primeira todos os valores.
  MUL: multiplica os valores das célular passadas. Pode receber qualquer quantidade de células.
  DIV: divide os valores das células passadas. Pode receber qualquer quantidade de células, ams deve dividir
  o valor da primeira pelas seguintes.
  MIN: retorna o menor valor dentre as células passadas. Pode receber qualquer quantidade de células.
  MAX: retorna o maior valor dentre as células passadas. Pode receber qualquer quantidade de células.
  AVG: retorna a média aritmética dos valores das células passadas. Pode receber qualquer quantidade de células.
*/
