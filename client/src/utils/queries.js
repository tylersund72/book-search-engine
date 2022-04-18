import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        title
        description
        bookId
        authors
        image
        link
      }
    }
  }
`;
