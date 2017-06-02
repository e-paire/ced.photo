import {Link} from "phenomic"
import PropTypes from "prop-types"
import React from "react"
import {FormattedDate} from "react-intl"

import Button from "Components/Button"

import styles from "./index.css"

const PagePreview = ({__url, title, date, description}) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={styles.wrapper}>
      <h1>
        <Link to={__url} className={styles.title}>
          {title}
        </Link>
      </h1>
      <div className={styles.date}>
        {pageDate &&
          <time key={pageDate.toISOString()}>
            <FormattedDate
              value={pageDate}
              day="2-digit"
              month="2-digit"
              year="numeric"
            />
          </time>}
      </div>
      <div className={styles.description}>
        {description}
        {" "}
      </div>
      <div className={styles.readMore}>
        <Button>
          <Link to={__url}>
            {"Voir plus →"}
          </Link>
        </Button>
      </div>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

PagePreview.defaultProps = {
  date: null,
  description: "",
}

export default PagePreview
