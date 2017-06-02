import React from "react"
import PropTypes from "prop-types"
import enhanceCollection from "phenomic/lib/enhance-collection"

import styles from "./index.css"

const PhotosGrid = (props, {collection}) => {
  const categories = enhanceCollection(collection, {
    filter: {layout: "PortfolioCategory"},
    sort: "position",
  })

  return (
    <div className={styles.grid}>
      {categories.map((category, i) => (
        <a
          key={i}
          href={category.__url}
          className={styles.link}
          style={{backgroundImage: `url(${category.url})`}}
        >
          <div className={styles.mask}>
            <h2 className={styles.title}>
              {category.title}
            </h2>
          </div>
        </a>
      ))}
    </div>
  )
}

PhotosGrid.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default PhotosGrid
