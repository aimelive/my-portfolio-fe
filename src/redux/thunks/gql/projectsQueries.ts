import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query {
    projects {
      id
      title
      tools
      stack
      stars
      rate
      imgUrl
      platforms
      createdAt
    }
  }
`;
