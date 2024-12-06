const { gql } = require("apollo-server");

// Definição do esquema GraphQL
const typeDefs = gql(`
  # Definição do tipo para usuários
  type User {
    id: ID!
    name: String!
    email: String!
  }

  # Definição do tipo para investimentos
  type Investment {
    id: ID!
    name: String!
    amount: Float!
    date: String!
  }

  # Consultas disponíveis
  type Query {
    # Retorna informações do usuário autenticado
    me: User

    # Retorna a lista de investimentos do usuário autenticado
    investments: [Investment!]!
  }

  # Operações de modificação
  type Mutation {
    # Login do usuário, retorna um token JWT
    login(email: String!, password: String!): String

    # Registro de um novo usuário
    register(name: String!, email: String!, password: String!): User

    # Adiciona um novo investimento
    addInvestment(name: String!, amount: Float!): Investment

    # Remove um investimento existente
    deleteInvestment(id: ID!): Boolean
  }
`);

module.exports = typeDefs;
