import PropTypes from "prop-types"
import React from "react"
import {addLocaleData, IntlProvider} from "react-intl"
import frLocaleData from "react-intl/locale-data/fr"

import "./assets/styles/index.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import GATracker from "./components/GoogleAnalyticsTracker"
import Header from "./components/Header"
import HeightContainer from "./components/HeightContainer"
import Footer from "./components/Footer"

addLocaleData(frLocaleData)

const AppContainer = ({children, params}) => (
  <GATracker params={params}>
    <IntlProvider locale="fr" defaultLocale="fr">
      <Container>
        <DefaultHeadMeta />
        <Header />
        <HeightContainer>
          {children}
        </HeightContainer>
        <Footer />
      </Container>
    </IntlProvider>
  </GATracker>
)

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object.isRequired,
}

export default AppContainer
