import classNames from "classnames"
import React, {Component} from "react"
import PropTypes from "prop-types"
import {Link} from "phenomic"
import Svg from "react-svg-inline"

import NavToggle from "Components/NavToggle"
import LogoSvg from "./assets/logo.svg"

import styles from "./index.css"

const Item = ({children, className, url, ...props}) => (
  <li className={classNames(styles.item, className)} {...props}>
    <Link to={url} className={styles.link} activeClassName={styles.link_active}>
      {children}
    </Link>
  </li>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
}

Item.defaultProps = {
  className: null,
}

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleClose() {
    this.setState({isOpen: false})
  }

  handleToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const {isOpen} = this.state
    return (
      <nav className={styles.nav}>
        <ul className={classNames(styles.list, isOpen && styles.list_open)}>
          <Item url="/" onClick={this.handleClose}>{"Accueil"}</Item>
          <Item url="/a-propos" onClick={this.handleClose}>{"A propos"}</Item>
          <Item url="/photos" onClick={this.handleClose}>{"Photos"}</Item>
          <Item url="/equipement" onClick={this.handleClose}>
            {"Equipement"}
          </Item>
          <Item url="/blog" onClick={this.handleClose}>{"Blog"}</Item>
          <Item url="/contact" onClick={this.handleClose}>{"Contact"}</Item>
        </ul>
        <Link to="/" className={styles.logo}>
          <Svg svg={LogoSvg} />
        </Link>
        <div className={styles.toggle}>
          <NavToggle open={isOpen} onClick={this.handleToggle} />
        </div>
      </nav>
    )
  }
}

export default Nav
