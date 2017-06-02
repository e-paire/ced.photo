import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

const WidthContainer = props => (
  <div className={styles.container}>
    {props.children}
  </div>
)

WidthContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WidthContainer
