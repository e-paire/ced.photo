import PropTypes from "prop-types"
import React, {Component} from "react"

import Page from "Layouts/Page"
import PhotosMasonry from "Components/PhotosMasonry"

class PortfolioCategory extends Component {
  render() {
    const {head: {photos}} = this.props
    return (
      <Page {...this.props}>
        <PhotosMasonry photos={photos} />
      </Page>
    )
  }
}

PortfolioCategory.propTypes = {
  head: PropTypes.shape({
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        caption: PropTypes.string,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
}

export default PortfolioCategory
