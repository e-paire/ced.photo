import React from "react"
import Helmet from "react-helmet"

const Comments = () => (
  <div>
    <div id="wpac-comment" />
    <Helmet>
      <script
        type="text/javascript"
        src="//embed.widgetpack.com/widget.js"
        async
        defer
      />
      <script type="text/javascript">
        {`
          wpac_init = window.wpac_init || []
          wpac_init.push({
            widget: "Comment",
            id: 5410
          })
        `}
      </script>
    </Helmet>
  </div>
)

export default Comments
