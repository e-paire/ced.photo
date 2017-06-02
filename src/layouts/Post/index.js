import PropTypes from "prop-types"
import React from "react"
import {FormattedDate} from "react-intl"

import Comments from "Components/Comments"
import Page from "Layouts/Page"

import styles from "./index.css"

const Post = props => {
  // it's up to you to choose what to do with this layout ;)
  const postDate = props.head.date ? new Date(props.head.date) : null

  return (
    <Page
      {...props}
      header={
        <div>
          <header className={styles.header}>
            {postDate &&
              <time dateTime={postDate.toISOString()}>
                <FormattedDate
                  value={postDate}
                  day="2-digit"
                  month="2-digit"
                  year="numeric"
                />
              </time>}
          </header>
        </div>
      }
    >
      <hr />
      <Comments />
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
