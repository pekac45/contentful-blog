/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
import Hero from './hero';
import Listen from './listen';
import Contact from './contact';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.css';
import './base.css';

const Template = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
          edges {
            node {
              title
              slug
              author {
                name
              }
              publishDate(formatString: "MMMM Do, YYYY")
              heroImage {
                file {
                  url
                }
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
              body {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <Hero />
        <div id="listen">
          <Listen />
        </div>
        <div id="blog">{children}</div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </>
    )}
  />
);

export default Template;
