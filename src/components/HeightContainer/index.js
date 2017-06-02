import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

const HeightContainer = props => (
  <div className={styles.container}>
    {props.children}
  </div>
)

HeightContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeightContainer
