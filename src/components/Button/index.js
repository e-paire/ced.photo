import React from "react"
import PropTypes from "prop-types"

import styles from "./index.css"

const Button = props => (
  <button className={styles.button}>
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
