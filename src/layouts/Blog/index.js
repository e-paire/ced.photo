import React from "react"

import LatestPosts from "Components/LatestPosts"
import Page from "Layouts/Page"

const Blog = props => (
  <Page {...props}>
    <LatestPosts />
  </Page>
)

export default Blog
