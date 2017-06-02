import React from "react"

import Page from "Layouts/Page"
import PhotosMasonry from "Components/PhotosMasonry"

const PortfolioCategory = props => (
  <Page {...props}>
    <PhotosMasonry />
  </Page>
)

export default PortfolioCategory
