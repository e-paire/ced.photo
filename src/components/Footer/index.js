import React from "react"
import Svg from "react-svg-inline"
import {Link} from "phenomic"

import styles from "./index.css"

import CodeSvg from "./assets/code.svg"
import ReactSvg from "./assets/react.svg"
import HeartSvg from "./assets/heart.svg"

const Footer = () => (
  <footer className={styles.footer}>
    <Svg svg={CodeSvg} width="16px" className={styles.svg} />
    {" with"}
    <Svg svg={HeartSvg} width="16px" className={styles.svg} />
    {" and built with "}
    <Link to="a-propos" className={styles.link}>
      <Svg svg={ReactSvg} width="16px" className={styles.svg} />
    </Link>
  </footer>
)

export default Footer
