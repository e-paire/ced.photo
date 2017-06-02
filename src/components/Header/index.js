import React from "react"

import WidthContainer from "../WidthContainer"
import Nav from "../Nav"

import styles from "./index.css"

const Header = () => (
  <header className={styles.header}>
    <WidthContainer>
      <Nav />
    </WidthContainer>
  </header>
)

export default Header
