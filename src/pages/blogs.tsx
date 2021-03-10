import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/addOns/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { BlogsContent } from "../components/blogs/BlogsContent";
import { BlogPageEmpty } from "../components/blogs/BlogPageEmpty";

export default function Blogs() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          totalCount
        }
      }
    `
  );
  return (
    <div>
      <Helmet>
        <title>Blogistan | Blogs</title>
      </Helmet>
      <div>
        <Layout>
          {data.allContentfulBlogPost.totalCount === 0 ? (
            <BlogPageEmpty />
          ) : (
            <BlogsContent />
          )}
        </Layout>
      </div>
    </div>
  );
}
