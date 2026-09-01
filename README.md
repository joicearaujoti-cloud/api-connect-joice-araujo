# API Connect

API REST desenvolvida com **Node.js** e **Express** como parte de um projeto acadêmico de desenvolvimento back-end.

O projeto tem como objetivo demonstrar a construção de uma API organizada, utilizando rotas HTTP, controladores, validação de dados e uma estrutura de armazenamento em memória.

---

## 📌 Sobre o projeto

A **API Connect** permite realizar operações básicas relacionadas ao cadastro e consulta de usuários.

A aplicação disponibiliza endpoints para:

* Cadastrar usuários;
* Validar os dados enviados no cadastro;
* Listar todos os usuários cadastrados;
* Buscar um usuário específico através do seu ID;
* Retornar códigos de status HTTP adequados para cada situação.

O projeto utiliza um array em memória como forma de armazenamento, não sendo necessário utilizar um banco de dados nesta versão.

> **Observação:** como os dados são armazenados apenas em memória, todos os usuários cadastrados são perdidos quando o servidor é encerrado ou reiniciado.

---

## 🛠️ Tecnologias utilizadas

* **Node.js**
* **Express**
* **JavaScript**
* **npm**
* **Postman, Insomnia ou Thunder Client** para testes das requisições HTTP

---

## 📂 Estrutura do projeto

```text
api-connect/
│
├── controllers/
│   └── controller.js
│
├── data/
│   └── data.js
│
├── routes/
│   └── routes.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
└── server.js
```

### `server.js`

Arquivo responsável pela inicialização do servidor Express e configuração dos middlewares e das rotas.

### `routes/routes.js`

Contém as rotas da API e direciona cada requisição para sua respectiva função no controlador.

### `controllers/controller.js`

Responsável pela lógica das operações da API, incluindo:

* Cadastro;
* Validação;
* Listagem;
* Busca por ID;
* Tratamento de erros.

### `data/data.js`

Responsável pelo armazenamento dos usuários em memória e pela geração dos IDs.

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* npm

Para verificar se o Node.js está instalado:

```bash
node --version
```

Para verificar o npm:

```bash
npm --version
```

---

## 🚀 Instalação

### 1. Clone ou baixe o projeto

Abra o terminal e acesse a pasta onde deseja armazenar o projeto.

```bash
cd caminho/do/projeto
```

### 2. Instale as dependências

Execute:

```bash
npm install
```

Caso o Express ainda não esteja instalado:

```bash
npm install express
```

---

## ▶️ Executando a aplicação

Para iniciar o servidor, execute:

```bash
node server.js
```

Se tudo estiver funcionando corretamente, será exibida a mensagem:

```text
Servidor rodando em http://localhost:3000
```

A API estará disponível em:

```text
http://localhost:3000
```

---

# 🔗 Endpoints

## 1. Cadastrar usuário

### POST `/usuarios`

Realiza o cadastro de um novo usuário.

### URL

```text
http://localhost:3000/usuarios
```

### Corpo da requisição

```json
{
    "nome": "Joice",
    "email": "joice@email.com"
}
```

### Resposta esperada

**Status HTTP: 201 Created**

```json
{
    "data": {
        "id": 1,
        "nome": "Joice",
        "email": "joice@email.com"
    }
}
```

---

## 2. Validação do cadastro

### POST `/usuarios`

A API verifica se os campos obrigatórios `nome` e `email` foram enviados.

### Exemplo de requisição inválida

```json
{
    "nome": "Maria"
}
```

Nesse exemplo, o campo `email` não foi informado.

### Resposta esperada

**Status HTTP: 400 Bad Request**

```json
{
    "error": "Os campos nome e email são obrigatórios."
}
```

---

## 3. Listar usuários

### GET `/usuarios`

Retorna todos os usuários cadastrados na memória.

### URL

```text
http://localhost:3000/usuarios
```

### Resposta esperada

**Status HTTP: 200 OK**

```json
{
    "data": [
        {
            "id": 1,
            "nome": "Joice",
            "email": "joice@email.com"
        }
    ]
}
```

Caso nenhum usuário tenha sido cadastrado:

```json
{
    "data": []
}
```

---

## 4. Buscar usuário por ID

### GET `/usuarios/:id`

Permite consultar um usuário específico através do seu ID.

### Exemplo

```text
http://localhost:3000/usuarios/1
```

### Usuário encontrado

**Status HTTP: 200 OK**

```json
{
    "data": {
        "id": 1,
        "nome": "Joice",
        "email": "joice@email.com"
    }
}
```

### Usuário não encontrado

Caso seja informado um ID inexistente:

```text
http://localhost:3000/usuarios/999
```

A API retorna:

**Status HTTP: 404 Not Found**

```json
{
    "error": "Usuário não encontrado."
}
```

---

# 📊 Resumo dos endpoints

| Método | Endpoint        | Descrição                       | Status esperado |
| ------ | --------------- | ------------------------------- | --------------- |
| POST   | `/usuarios`     | Criar usuário                   | **201**         |
| POST   | `/usuarios`     | Cadastro sem dados obrigatórios | **400**         |
| GET    | `/usuarios`     | Listar usuários                 | **200**         |
| GET    | `/usuarios/:id` | Buscar usuário por ID           | **200**         |
| GET    | `/usuarios/:id` | ID inexistente                  | **404**         |

---

# 🧪 Testes da API

Os testes podem ser realizados utilizando ferramentas como:

* Postman;
* Insomnia;
* Thunder Client.

## Teste 1 — Criação com sucesso

**Método:** POST

```text
http://localhost:3000/usuarios
```

Body:

```json
{
    "nome": "Joice",
    "email": "joice@email.com"
}
```

Resultado esperado:

```text
201 Created
```

---

## Teste 2 — Falha na validação

**Método:** POST

```text
http://localhost:3000/usuarios
```

Body:

```json
{
    "nome": "Maria"
}
```

Resultado esperado:

```text
400 Bad Request
```

---

## Teste 3 — Listagem geral

**Método:** GET

```text
http://localhost:3000/usuarios
```

Resultado esperado:

```text
200 OK
```

---

## Teste 4 — Busca de ID inexistente

**Método:** GET

```text
http://localhost:3000/usuarios/999
```

Resultado esperado:

```text
404 Not Found
```

---

# 🔄 Fluxo básico da aplicação

O funcionamento da API segue o seguinte fluxo:

```text
Cliente
   │
   ▼
Requisição HTTP
   │
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Data / Array em memória
   │
   ▼
Resposta HTTP
   │
   ▼
Cliente
```

As rotas recebem as requisições HTTP e encaminham cada operação para o controlador correspondente.

O controlador processa os dados, realiza as validações necessárias e retorna uma resposta com o código HTTP adequado.

---

# 🔐 Validação e tratamento de erros

A API realiza validação dos dados obrigatórios durante o cadastro.

Os campos necessários são:

* `nome`
* `email`

Quando algum campo obrigatório não é enviado, a API retorna:

```text
400 Bad Request
```

Quando uma busca é realizada utilizando um ID que não existe, a API retorna:

```text
404 Not Found
```

Quando o cadastro é realizado corretamente, a API retorna:

```text
201 Created
```

As operações de consulta realizadas com sucesso retornam:

```text
200 OK
```

---

# 💾 Armazenamento

Nesta versão do projeto, os usuários são armazenados utilizando um **array JavaScript em memória**.

Exemplo:

```javascript
const usuarios = [];
```

Cada usuário recebe um ID incremental automaticamente.

Exemplo:

```json
{
    "id": 1,
    "nome": "Joice",
    "email": "joice@email.com"
}
```

Como não existe banco de dados nesta versão, os dados são temporários e desaparecem quando a aplicação é reiniciada.

---

# 📋 Requisitos atendidos

O projeto atende aos requisitos propostos para a etapa de testes:

* [x] Cadastro de usuário com nome e e-mail;
* [x] Retorno HTTP `201` após cadastro bem-sucedido;
* [x] Validação de campos obrigatórios;
* [x] Retorno HTTP `400` para cadastro inválido;
* [x] Listagem de usuários;
* [x] Retorno HTTP `200` para listagem;
* [x] Busca de usuário por ID;
* [x] Retorno HTTP `404` para ID inexistente;
* [x] Respostas em formato JSON;
* [x] Separação entre rotas, controladores e dados;
* [x] Testes utilizando cliente HTTP.

---

# 🎯 Objetivo acadêmico

O projeto foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento back-end e construção de APIs REST, incluindo:

* Arquitetura modular;
* Separação de responsabilidades;
* Rotas HTTP;
* Métodos GET e POST;
* Códigos de status HTTP;
* Manipulação de JSON;
* Validação de dados;
* Tratamento de erros;
* Testes de API;
* Organização de projetos Node.js.

---

# 👩‍💻 Autora

**Joice Araújo Noleto**

Projeto desenvolvido para fins acadêmicos como parte dos estudos em **Análise e Desenvolvimento de Sistemas**.
