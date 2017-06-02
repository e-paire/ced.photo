import React from "react"
import PropTypes from "prop-types"

import Page from "Layouts/Page"

const PageError = ({error, errorText}) => (
  <Page
    head={{
      title: error === 404 ? "Page introuvable" : error,
      metaTitle: "Page introuvable",
      metaDescription: "La page que vous avez demandé est inconnue. Essayez de revenir sur la page d'accueil.",
    }}
  >
    {error === 404
      ? <div>
          {"Vous n'auriez pas du arriver ici."}
          <br />
          {
            "J'ai peut être fait une erreur dans un lien ou vous avez peut être modifié l'url."
          }
          <br />
          <br />
          {
            "Merci de me contacter pour me faire savoir ce qu'il s'est passé, je me chargerais d'arranger tout ça."
          }
        </div>
      : errorText}
  </Page>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
