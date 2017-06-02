import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "Components/PagesList"

const defaultNumberOfPosts = 6

const LatestPosts = (props, {collection}) => {
  const latestPosts = enhanceCollection(collection, {
    filter: {layout: "Post"},
    sort: "date",
    reverse: true,
  }).slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <PagesList pages={latestPosts} />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.defaultProps = {
  numberOfPosts: 5,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
