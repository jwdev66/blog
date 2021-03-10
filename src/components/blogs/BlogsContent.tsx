import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const BlogsContent = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              summary
              body {
                raw
              }
              free
              image {
                gatsbyImageData(
                  width: 400
                  height: 200
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
              source
              publishedDate
              slug
            }
          }
        }
      }
    `
  );
  console.log(data.allContentfulBlogPost.edges[0].node.image);
  return (
    <div>
      <div>
        <h3>Title</h3>
        <p>{data.allContentfulBlogPost.edges[0].node.title}</p>
      </div>
      <hr />
      <div>
        <h3>Summary</h3>
        <p>{data.allContentfulBlogPost.edges[0].node.summary}</p>
      </div>
      <hr />
      <div>
        <h3>Body</h3>
        <div>
          {documentToReactComponents(
            JSON.parse(data.allContentfulBlogPost.edges[0].node.body.raw)
          )}
        </div>
      </div>
      <hr />
      <div>
        <h3>Type</h3>
        <p>
          {data.allContentfulBlogPost.edges[0].node.free ? "Free" : "Premium"}
        </p>
      </div>
      <hr />
      <div>
        <h3>Image</h3>
        <GatsbyImage
          image={getImage(data.allContentfulBlogPost.edges[0].node.image)}
          alt={data.allContentfulBlogPost.edges[0].node.title}
        />
      </div>
      <hr />
      <div>
        <h3>Source</h3>
        <p>{data.allContentfulBlogPost.edges[0].node.source}</p>
      </div>
      <hr />
      <div>
        <h3>Published at</h3>
        <p>{data.allContentfulBlogPost.edges[0].node.publishedDate}</p>
      </div>
      <hr />
      <div>
        <h3>Slug</h3>
        <p>{data.allContentfulBlogPost.edges[0].node.slug}</p>
      </div>
      <hr />
    </div>
  );
};
