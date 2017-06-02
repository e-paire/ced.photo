import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const DefaultHeadMeta = (props, {metadata: {pkg}}) => (
  <div hidden>
    <Helmet
      meta={[
        {
          name: "generator",
          content: `${process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`,
        },
        {property: "og:site_name", content: pkg.name},
        {name: "twitter:site", content: `@${pkg.twitter}`},
        ...(props.meta ? props.meta : []),
      ]}
      script={[
        {
          src: "https://cdn.polyfill.io/v2/polyfill.min.js" +
            "?features=es6&flags=gated",
        },
        ...(props.scripts ? props.scripts : []),
      ]}
    />

    { /* favicons */ }
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fdfdf9" />
    <meta name="theme-color" content="#fdfdf9" />

    {/* meta viewport safari/chrome/edge */}
    <Helmet
      meta={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ]}
    />
    <style>{"@-ms-viewport { width: device-width; }"}</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: PropTypes.arrayOf(PropTypes.object),
  scripts: PropTypes.arrayOf(PropTypes.object),
}

DefaultHeadMeta.defaultProps = {
  meta: [],
  scripts: [],
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
