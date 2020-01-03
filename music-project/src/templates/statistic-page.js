import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import StatisticPageTemplate from '../components/StatisticPageTemplate'
import Layout from '../components/Layout'

const StatisticPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <StatisticPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

StatisticPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default StatisticPage 

export const statisticPageQuery = graphql`
  query StatisticPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
