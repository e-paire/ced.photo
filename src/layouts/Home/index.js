import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Svg from "react-svg-inline"

import lakePhoto from "./assets/aulus-les-bains.jpg"
import DjiMavicProSvg from "./assets/dji-mavic-pro.svg"
import SonyAlpha6000Svg from "./assets/sony-alpha-6000.svg"

import styles from "./index.css"

const Home = ({head}, {metadata: {pkg}}) => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  const metaDescription = head.metaDescription ? head.metaDescription : ""
  const meta = [
    {property: "og:type", content: "article"},
    {property: "og:title", content: metaTitle},
    {property: "og:url", content: process.env.PHENOMIC_USER_URL},
    {property: "og:description", content: metaDescription},
    {name: "twitter:card", content: "summary"},
    {name: "twitter:title", content: metaTitle},
    {name: "twitter:creator", content: `@${pkg.twitter}`},
    {name: "twitter:description", content: metaDescription},
    {name: "description", content: metaDescription},
  ]

  return (
    <div className={styles.container}>
      <Helmet title={metaTitle} meta={meta} />
      <img src={lakePhoto} className={styles.image} alt="" />
      <div className={styles.content}>
        <div className={styles.camera}>
          <Svg svg={SonyAlpha6000Svg} />
        </div>
        <div className={styles.text}>
          {"Photographe et vidéaste passionné "}
        </div>
        <div className={styles.drone}>
          <Svg svg={DjiMavicProSvg} />
        </div>
      </div>
    </div>
  )
}

Home.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Home.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Home
