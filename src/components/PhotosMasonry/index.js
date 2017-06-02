import React, {Component} from "react"
import PropTypes from "prop-types"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import ImageLightbox from "Components/ImagesLightbox"

import styles from "./index.css"

class PhotosMasonry extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIndex: 0,
      isLightboxOpen: false,
    }

    this.handleCloseLightbox = this.handleCloseLightbox.bind(this)
  }

  handleCloseLightbox() {
    this.setState({
      lightboxIndex: 0,
      isLightboxOpen: false,
    })
  }

  handleOpenLightbox(index) {
    this.setState({
      lightboxIndex: index,
      isLightboxOpen: true,
    })
  }

  render() {
    const {isLightboxOpen, lightboxIndex} = this.state
    const {photos} = this.props
    const images = photos.map(({caption, url}) => ({
      caption,
      src: url,
    }))

    return (
      <ImageLightbox
        index={lightboxIndex}
        images={images}
        onClose={this.handleCloseLightbox}
        open={isLightboxOpen}
      >
        <ResponsiveMasonry>
          <Masonry gutter="10px">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={styles.wrapper}
                onClick={() => this.handleOpenLightbox(i)}
              >
                <img key={i} src={photo.url} alt="" className={styles.image} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </ImageLightbox>
    )
  }
}

PhotosMasonry.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ),
}

PhotosMasonry.defaultProps = {
  photos: [],
}

export default PhotosMasonry
