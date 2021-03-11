import React, { useEffect, useState, useContext } from "react";
import "./blogPost.css";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/addOns/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@material-ui/core";
import { IdentityContext } from "../../identity-context";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      summary
      free
      body {
        raw
      }
      image {
        gatsbyImageData(
          width: 400
          height: 200
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
      source
      publishedDate(formatString: "DD MMMM YYYY")
    }
  }
`;

const BlogPost = (props: any) => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext);
  return (
    <div>
      <Helmet>
        <title>Blogistan | {props.data.contentfulBlogPost.title}</title>
      </Helmet>
      <Layout>
        <div className='blogPostDiv'>
          <div>
            <h1>{props.data.contentfulBlogPost.title}</h1>
          </div>
          <div className='iamgeDiv'>
            <GatsbyImage
              image={getImage(props.data.contentfulBlogPost.image)}
              alt={props.data.contentfulBlogPost.title}
              className='image'
            />
          </div>
          {props.data.contentfulBlogPost.free ? (
            <div className='content'>
              {documentToReactComponents(
                JSON.parse(props.data.contentfulBlogPost.body.raw)
              )}
            </div>
          ) : (
            <div>
              {user === undefined ? (
                <div>
                  <div className='content'>
                    {props.data.contentfulBlogPost.summary}
                  </div>
                  <div className='content premium'>
                    This is content is premium. Kindly SignIn to read this
                    article.
                  </div>
                  <div className='buttonDiv'>
                    <Button
                      className='signInButton'
                      onClick={() => {
                        netlifyIdentity.open();
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className='content'>
                    {documentToReactComponents(
                      JSON.parse(props.data.contentfulBlogPost.body.raw)
                    )}
                  </div>
                  <div className='buttonDiv'>
                    <Button
                      className='signOutButton'
                      onClick={() => {
                        netlifyIdentity.logout();
                      }}
                    >
                      LogOut
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className='source'>
            <p>
              by: <strong>{props.data.contentfulBlogPost.source}</strong>
            </p>
          </div>
          <div className='published'>
            <p>
              Published :{" "}
              <small>{props.data.contentfulBlogPost.publishedDate}</small>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPost;
