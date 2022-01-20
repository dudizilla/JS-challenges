/* Desafio nº 28
    Escreva uma classe que calcula e mantém informações sobre exploradores, como seu nível e habilidades.
  Ela precisará obedecer aos seguintes requisitos:

  *NÍVEL*
  -Um explorador começa no nível 1 e pode evoluir até o nível 99;
  -O explorador não deve subir de nível após o nível 99, mas pode acumular pontos de exp.
  -Para subir de lvl o explorador de acumular 100pts + 10pts * o seu nível atual para cada lvl
  (ex.: Lvl 1: 110pts, Lvl 2: 120pts, Lvl 3: 130pts, etc)
  -Para aumentar o seu lvl, o explorador deve ganhar pontos de exp. através da ação explorar
  -Os pontos de exp. devem se manter acumulados mesmo após subir de lvl.

  *RANK*
  Um explorador deve ser ranqueado entre 6 ranks diferentes: Novato, Explorador, Veterano, Elite, Mestre e Lenda

  O ranqueamento deve obedecer à seguinte ordem:
  1-9: Novato
  10-29: Explorador
  30-49: Veterano
  50-79: Elite
  80-98: Mestre
  99: Lenda

  *AÇÃO DE EXPLORAR* 
  -A ação de explorar precisa de um planeta a ser explorado
  -O planeta a ser explorado precisa ter um ID, um nome, um nível de hostilidade (entre pacífico, neutro
  e hostil) e um tipo de terreno (ex.: desértico, florestal, montanhoso, subaquático, etc.)
  -Um explorador morto não pode explorar
  -Deve ser possível saber todos os planetas que um explorador já explorou com sucesso.

  *RESULTADO*
    A ação de explorar pode ser bem sucedida ou falhar. Para determinar o resultado vai ser preciso
  simular um "rolar de dados", sorteando dois números aleatórios entre 1 e 6, com resultados entre 2 e 12.
    
    Resultados entre 5 e 12 garantem sucesso em planetas pacíficos.
    Resultados entre 7 e 12 garantem sucesso em planetas neutros.
    Resultados entre 9 e 12 garantem sucesso em planetas hostis.

    Resultado 2 (dois números 1) em planetas hostis o explorador morre, mas não deve ser escluído.
    Após três resultados 12 (dois números 6) em planetas de um mesmo terreno, o explorador se torna um 
  especialista naquele terreno e recebe um bônus de +1 no resultado dos dados. Esse bônus impede que ele 
  morra em caso de falha crítica e aumenta as chances de sucesso.
        Só é possível acumular esse bônus uma vez.

  *PONTOS DE EXP.*
    Em caso de sucesso na ação de explorar, o explorador deve receber pontos de exp de acordo com o seguinte:
  15pts: planeta pacífico
  25pts: planeta neutro
  50pts: planeta hostil

    Em caso de falha na ação explorar, o explorador deve receber pontos de exp de acordo com o seguinte:
  0pts: planeta pacífico
  0pts: planeta neutro
  10pts: planeta hostil
*/
