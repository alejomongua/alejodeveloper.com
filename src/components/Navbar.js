import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <h3 className="navbar-brand">
            <Link to="/" className="navbar-item has-text-primary">
              {'<AlejoDeveloper />'}
            </Link>
          </h3>
          <div className="navbar-start">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={`/${edge.node.slug}`}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
