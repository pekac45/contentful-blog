/* eslint-disable react/no-danger */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Template from '../components/layout';

class BlogPostTemplate extends Component {
  render() {
    const post = get(this, 'props.data.contentfulBlogPost');

    return (
      <Template>
        <Helmet title={`${post.title}`} />
        <div className="inner-blog-post">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="entry-media">
                  <Img fluid={post.heroImage.fluid} backgroundColor="#f4f8fb" />
                </div>
                <h1 id="blog-title" className="section-headline"> {post.title} </h1>
                <p> {post.publishDate} </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query blogPostQuery($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        file {
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`;
