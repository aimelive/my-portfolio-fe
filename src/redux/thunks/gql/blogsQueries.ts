import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query {
    getAllBlogs {
      id
      title
      intro
      slug
      tags
      imgUrl
      createdAt
      updatedAt
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    getBlogBySlug(slug: $slug) {
      id
      title
      intro
      slug
      body
      tags
      imgUrl
      createdAt
      updatedAt
    }
  }
`;
