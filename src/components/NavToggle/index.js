import PropTypes from "prop-types"
import React from "react"

import styles from "./index.css"

const NavToggle = ({open, onClick}) => (
  <div className={styles[`toggle${open ? "_open" : ""}`]} onClick={onClick}>
    <div className={styles.icon} />
  </div>
)

NavToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
}

NavToggle.defaultProps = {
  open: false,
}

export default NavToggle
