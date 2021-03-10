import React from "react";
import "./blogContent.css";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Button, Card, CardContent, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  readMore: {
    background: "linear-gradient(45deg, #53a3ff 30%, #6d6bfe 90%)",
    textDecoration: "none",
  },
}));

export const BlogsContent = () => {
  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              summary
              free
              image {
                gatsbyImageData(
                  width: 300
                  height: 150
                  layout: CONSTRAINED
                  placeholder: TRACED_SVG
                )
              }
              slug
            }
          }
        }
      }
    `
  );
  return (
    <div className='blogsPageDiv'>
      <Grid container className='blogsPageGrid'>
        {data.allContentfulBlogPost.edges.map((edge) => (
          <Grid
            key={edge.node.id}
            item
            xs={12}
            md={5}
            component={Card}
            elevation={0}
            className='blogCard'
            style={{ backgroundColor: "white" }}
          >
            <CardContent>
              <h3 className='blogPageTitle'>
                <strong>{edge.node.title}</strong>
              </h3>
              <div className='blogPageImageDiv'>
                <GatsbyImage
                  image={getImage(edge.node.image)}
                  alt={edge.node.title}
                  className='blogPageImage'
                />
              </div>
              <div className='blogPageSummaryDiv'>
                <p className='blogPageSummary'>{edge.node.summary}</p>
              </div>
              <div className='blogPageButtonDiv'>
                <Button
                  variant='contained'
                  className={classes.readMore}
                  onClick={() => {
                    navigate(`/blogs/${edge.node.slug}`);
                  }}
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
