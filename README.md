
---
# Desafio de programação para o processo seletivo Elogroup

Eu desenvolvi um formulário HTML e uma rotina em Ajax com jquery que envia via POST os dados desse formulário em formato JSON para o endpoint "http://localhost:8080". As validações e o tratamento dos dados do formulário para formato JSON foram feitos em Javascript puro. A hierarquia dos arquivos é muito simples, há apenas o arquivo job-app.html, que posssui a estrutura HTML do formulário e script.js, que possui toda a rotina em Javascript e a função final de POST nos dados em jquery via ajax.

* PS.: Os dados são enviados no seguinte formato para o endpoint: {myform: JSONdata}, sendo JSONdata os dados que foram solicitados em formato JSON, inclusive o Array de opções selecionadas nos campos tipo checkbox, como solicitado.
Ex.: JSONdata = "{"nome":"Isaque Borges","telefone":"61 - 99581204","source":"Internet","social_checked":["Facebook","LinkedIn","Instagram"]}"

* PS2.: Na validação do campo telefone escolhi por ser opcional a sequência de caracteres " - ", por ser uma condição muito exclusiva que pode afetar negativamente a usabilidade do formulário. Mas se a base de dados requerer exclusivamente este formato é uma mudança simples. No momento o campo aceita os formatos 9999999999, 99-99999999, 99 -99999999, 99- 99999999, 99 - 99999999. 

Meus dados na plataforma gupy são:
* Nome: Isaque Borges Paulino Silva
* E-mail: isaquim123@gmail.com