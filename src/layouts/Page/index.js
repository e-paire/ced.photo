import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import warning from "warning"
import {BodyContainer, joinUri} from "phenomic"

import Loading from "Components/Loading"
import Content from "Components/Content"

import styles from "./index.css"

const Page = (
  {isLoading, __filename, __url, head, body, header, footer, children},
  {metadata: {pkg}}
) => {
  warning(
    typeof head.metaTitle === "string",
    `Your page '${__filename}' needs a meta-title`
  )

  warning(
    typeof head.metaDescription === "string",
    `Your page '${__filename}' needs a meta-description`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title
  const metaDescription = head.metaDescription ? head.metaDescription : ""
  const meta = [
    {property: "og:type", content: "article"},
    {property: "og:title", content: metaTitle},
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    {property: "og:description", content: metaDescription},
    {name: "twitter:card", content: "summary"},
    {name: "twitter:title", content: metaTitle},
    {name: "twitter:creator", content: `@${pkg.twitter}`},
    {name: "twitter:description", content: metaDescription},
    {name: "description", content: metaDescription},
  ]
  return (
    <div className={styles.page}>
      <Helmet title={metaTitle} meta={meta} />
      <Content>
        {header}
        <div className={styles.body}>
          {head.title &&
            <div className={styles.title}>
              <h1>
                {head.title}
              </h1>
            </div>}
          {isLoading ? <Loading /> : <BodyContainer>{body}</BodyContainer>}
        </div>
        {children}
        {footer}
      </Content>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.defaultProps = {
  children: null,
  isLoading: false,
  __filename: "",
  __url: "",
  body: null,
  header: null,
  footer: null,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
