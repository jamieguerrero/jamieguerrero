import { graphql } from "gatsby";
import React from "react";
import PageWrapper from "../../components/PageWrapper";
import * as styles from "./index.module.scss";

const blogURL = "https://jamieguerrero.hashnode.dev";

function BlogPage({ data }) {
  if (!data?.allHashNodePost?.edges) return null;
  return (
    <PageWrapper>
      <div className={styles.BlogWrapper}>
        <h1>Blog</h1>
        <ul>
          {data?.allHashNodePost?.edges?.map(({ node: blogPost }) => (
            <li key={blogPost.cuid}>
              <a
                href={`${blogURL}/${blogPost.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                {blogPost.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}

export const query = graphql`
  query BlogPageQuery {
    allHashNodePost {
      edges {
        node {
          brief
          slug
          title
          cuid
        }
      }
    }
  }
`;

export default BlogPage;
