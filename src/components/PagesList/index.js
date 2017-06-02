import React from "react"
import PropTypes from "prop-types"

import PagePreview from "../PagePreview"

import styles from "./index.css"

const PagesList = ({pages}) => (
  <div>
    {pages.length
      ? <ul className={styles.list}>
          {pages.map(page => (
            <li key={page.__url} className={styles.page}>
              <PagePreview {...page} />
            </li>
          ))}
        </ul>
      : "Les articles sont en cours de rédaction. N'hésitez pas à repasser plus tard :)"}
  </div>
)

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
