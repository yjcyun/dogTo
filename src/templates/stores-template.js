import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout'
import FindStores from '../components/stores/FindStores'

export const query = graphql`
  query getStores($skip:Int!, $limit:Int!) {
   stores: allMdx(
      limit: $limit, 
      skip: $skip, 
      sort: {fields: frontmatter___title, order: ASC}, 
      filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
      nodes {
        id
        body
        frontmatter {
          address
          author
          category
          date(fromNow: true)
          name
          imageCredit
          rating
          slug
          title
          website
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      totalCount
    }
  }
`

const StoresTemplate = ({ data, pageContext }) => {
  const { stores: { nodes, totalCount  } } = data;
  const { currentPage, numOfPages } = pageContext;
  const isLast = currentPage === numOfPages;
  const nextPage = `/stores/${currentPage + 1}`;

  return (
    <Layout>
      <FindStores
        stores={nodes}
        numOfPages={numOfPages}
        currentPage={currentPage}
        nextPage={nextPage}
        isLast={isLast}
        totalCount={totalCount}
      />
    </Layout>
  )
}

export default StoresTemplate