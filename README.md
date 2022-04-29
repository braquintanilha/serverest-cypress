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

## Integração contínua

Foi implementada a integração contínua com GitHub Actions no projeto. O arquivo de configuração do CI é o seguinte: `.github/workflows/ci.yml`. Em todo push ou pull_request no branch `master` o pipeline é executado. Da forma como foi configurado, o job `eslint` é executado como pré-condição dos testes e, caso execute sem falhas, todos os jobs de teste são exeutados de forma paralela. Cada job de teste executa um arquivo de teste do projeto (.spec.js)

Sobre os jobs:

`eslint` - executa a ferramenta de análise estática de código ESLint. Caso algum erro seja encontrado, o build quebra e já retorna erro;

`post-login-tests` - executa o script NPM 'test:postLogin' que, por sua vez, executa os testes do arquivo 'postLogin.spec.js'. A mesma lógica vale para todos os outros jobs de teste.
___

Se você tem alguma dúvida ou sugestão, entre em contato! Vamos bater um papo ☕