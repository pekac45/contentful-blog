import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Listen from "../components/listen"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.css"
import "./base.css"

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
              name: "description",
              content: data.site.siteMetadata.description,
            },
            { name: "keywords", content: "sample, something" },
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
)

export default Template
