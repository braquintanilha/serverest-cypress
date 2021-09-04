# ServeRest Cypress

Olá, seja bem-vindo!! Esse é um projeto estudo de testes back-end com Cypress para o simulador de loja virtual ServeRest API. Para acessar a documentação do ServeRest basta acessar https://serverest.dev/

## Pré-requisitos

Para executar esse projeto é necessário:

- git
- Node.js
- NPM

## Instalação das dependências de desenvolvimento

Uma vez que todas as dependências já estão listadas no arquivo `package.json`, basta executar o comando `npm install` na raiz do projeto.

## Execução do projeto

`npm test` - executa o Cypress em modo headless

`npm cy:open`- executa o modo interativo do Cypress

`npm lint` - executa a ferramenta de análise estática de código ESLint e mostra o relatório de inconsistências

`npm lint:fix` - executa a ferramenta de análise estática de código ESLint e corrige as inconsistências

## Arquitetura e design pattern

Nesse projeto foi utilizado um pattern muito comum em testes back-end, porém explorando os recursos do Cypress. A estrutura do projeto é a seguinte:

`integration` - arquivos de teste (separados em subpastas que representam os endpoints);

`support/requests` - arquivos com os métodos de request. Todos esses arquivos são adicionados ao `index.js` e os métodos de request são comandos customizados do Cypress (tornam-se acessíveis através do objeto `cy` em qualquer contexto de teste do projeto);

`support/schemas` - arquivos de schema utilizados nos testes de schema JSON;

`fixtures` - arquivos de payload (.json) utilizados nos testes.
___

Se você tem alguma dúvida ou sugestão, entre em contato! Vamos bater um papo ☕