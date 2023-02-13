import { gql } from "@apollo/client";

export const GET_ALL_TESTIMONIALS = gql`
  query Testimonials {
    testimonials {
      id
      username
      message
      imgUrl
      link
      createdAt
    }
  }
`;
