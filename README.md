# POC - ST RC

Porva de conceito de API REST desenvolvida em Node que realizará operações em um banco de dados de funcionários.

>
## Pré-requisitos

1. Ter Node e NPM instalados na maquina.


## Base de Dados

- Por se tratar de uma POC, esta API esta utizando um banco NoSQL (MongoDb) no mLab (https://mlab.com).


## Instalação da API

1. Fazer download do arquivo compactado do projeto.
2. Descompacte o arquivo.
3. Via terminal entre na pasta que acabou de ser descompactada.
4. Execute o comando: 
    ```
    npm install
    ```


## Como executar a API

1. Via terminal acesse a pasta do projeto após a instalação.
2. Execute o comando: 
    ```
    nodemon app 
    ```


## Requisitos da API

Esta API tem os seguintes métodos implementados:

- GET

    - listAll: método que retorna a lista de todos os funcionários cadastrados.
    - getById: método que retorna o funcioário com base no ID passado como parametro na URL.


- PUT

    - update: método que atualizado o funcioário com base no ID passado como parâmetro na URL, além de nome, idade e cargo passado no corpo da requisição.


- POST  

    - create: método responsável pela criação do funcionário, onde no corpo da requisição devemos enviar os campos nome, idade e cargo.


- DELETE

    - delete: métdo que remove o funcionário com base no ID passado na URL. 


**OBSERVAÇÃO**: _Como se trata de uma POC, não foi implementado criptografia e nem camada de autenticação._


## Melhorias Futuras na API

1. Implementação da camada de autenticação com pacote 'jsonwebtoken'.
2. Implementação de criptografia com o pacote 'bcryptjs'.
3. Implementação da camada de persistência com 'sequelize'.
