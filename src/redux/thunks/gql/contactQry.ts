import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation AddContact($fullName: String!, $email: String!, $message: String!) {
    addContact(fullName: $fullName, email: $email, message: $message) {
      fullName
      createdAt
    }
  }
`;
