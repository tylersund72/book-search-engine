import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBooks) {
    saveBook(input: $input) {
      _id
      username
      bookCount
      savedBooks {
        title
        description
        bookID
        authors
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: String!) {
    removeBook(bookID: $bookID) {
      _id
      username
      bookCount
      savedBooks {
        title
        description
        bookID
        authors
        image
        link
      }
    }
  }
`;
