const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: id
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: id
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: id
    user: User
  }
  input SavedBooks {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBooks): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
