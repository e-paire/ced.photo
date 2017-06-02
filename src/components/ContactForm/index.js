import React, {PureComponent} from "react"

import Button from "Components/Button"

import styles from "./index.css"

class Contact extends PureComponent {
  render() {
    return (
      <form
        method="post"
        name="contact"
        className={styles.form}
        action="/merci"
        data-netlify
      >
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Votre email"
        />
        <textarea
          className={styles.textarea}
          name="message"
          rows="10"
          placeholder="Votre message"
        />
        <input type="hidden" name="form-name" value="contact" />
        <Button>
          {"Envoyer"}
        </Button>
      </form>
    )
  }
}

export default Contact
