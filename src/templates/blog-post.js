import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { mdxPropTypes } from '../constants/propTypes';

const BlogPostTemplate = ({ data: { mdx } }) => (
  <div>
    <h1>{mdx.frontmatter.title}</h1>
  </div>
);

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: mdxPropTypes
  }).isRequired
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(childMdxBlogPost: {slug: {eq: $slug }}) {
      id
      frontmatter {
        title
      }
    }
  }
`;
