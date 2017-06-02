import React from "react"
import {Route} from "react-router"
import {PageContainer as PhenomicPageContainer} from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import Blog from "./layouts/Blog"
import Contact from "./layouts/Contact"
import Home from "./layouts/Home"
import PageError from "./layouts/PageError"
import Portfolio from "./layouts/Portfolio"
import PortfolioCategory from "./layouts/PortfolioCategory"
import Post from "./layouts/Post"

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Blog,
      Contact,
      Home,
      Page,
      PageError,
      Portfolio,
      PortfolioCategory,
      Post,
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path="*" component={PageContainer} />
  </Route>
)
