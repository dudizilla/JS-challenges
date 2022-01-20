/* Desafio nº 13
    Escreva uma função que recebe um número e verifica se ele é um código de identificação
  válido segundo as regras de criação do dígito verificador. A criação do dígito verificador
  funciona da seguinte forma:

  1. Some os dígitos das posições pares (ímpares se estiver contando a partir de 1);
  2. Multiplique esse resultado por 3
  3. Some os dígitos das posições ímpares (pares se estiver contando a partir de 1) do número original
  e então some esse resultado ao resultado do passo anterior;
  4. Encontre o resto da divisão do resultado do passo anterior por 10;
  5. Se o resto da divisão for 0, o dígito verificador é 0, do contrário o dígito verificador é 10 - resto
*/
