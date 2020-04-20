import PropTypes from 'prop-types';

const mdxPropTypes = PropTypes.shape({
  id: PropTypes.string,
  html: PropTypes.string,
  frontmatter: PropTypes.shape({
    title: PropTypes.string
  })
});

export default { mdxPropTypes };
