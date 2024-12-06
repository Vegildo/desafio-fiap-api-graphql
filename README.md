## 👋  Bem-vindo(a)
Olá, meu nome é Leonardo Braga. E esse é o desafio para Pós-graduação da FIAP, para FullStack.

## 🎉 Awesome Desafio API-GRAPQL

Bem-vindo ao **Desafio FIAP GraphQL APP**! Neste repositório, você encontrará uma api em NodeJs baseado no desafio FIAP GraphQL. Este projeto não apenas oferece aprendizado, mas também demonstra várias técnicas avançadas de desenvolvimento com containers.

### 💻 Tecnologias Utilizadas

[![JavaScript](https://img.shields.io/badge/javascript-gray?logo=javascript&logoColor=yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![NodeJS](https://img.shields.io/badge/node.js-339933?logo=Node.js&logoColor=white)](https://nodejs.org/docs/latest/api/)
![Static Badge](https://img.shields.io/badge/GraphQL-F29111)


- JavaScript e node js para a lógica de programação e API.
- GraphQL para consulta e ambiente de execução dos dados.


### 👓  Como utilizar

1. Clone este repositório para sua máquina local.
2. No terminal do projeto rode `npm install`.
3. Ainda no mesmo termonal rode `npm start`.
4. Abra o navegador na URL `http://localhost:4000`.
5. O Playground do Apollo Server será carregado. Ele é uma interface interativa para executar queries e mutations.
6. No Playground, você pode enviar queries e mutations para testar as funcionalidades da **API**.
7. Exemplo:

```
mutation {
  register(name: "Nome Sobrenome", email: "nome@example.com", password: "123456") {
    id
    name
    email
  }
}
```

```
mutation {
  login(email: "nome@example.com", password: "123456")
}
```
8. No passo anterior criamos um user e logamos, você receberá um token, copie e cole-o no HTTP HEADERS. Ex:

```
Authorization: SEU_TOKEN
```
9. Dessa forma poderá fazer consultas, como: 

```
query {
  me {
    id
    name
    email
  }
}
```
10. Adicionar investimentos, Ex:

```
mutation {
  addInvestment(name: "Ações da Empresa X", amount: 1500.50) {
    id
    name
    amount
    date
  }
}
```

11. Listar investimentos. Ex:

```
query {
  investments {
    id
    name
    amount
    date
  }
}
```


### 🔍 Créditos

Este app foi desenvolvido, por Leonardo Braga, como parte de um desafio educacional da Faculdade de Informática e Administração Paulista.

---

Lembre-se de conferir o repositório original [aqui](https://github.com/Vegildo/deasfio-fiap-api-graphql) e deixar uma ⭐️ se você gostou do projeto!


