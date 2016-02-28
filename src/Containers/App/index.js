import React, { Component } from 'react'

import styles from './styles.css'
import Header from '../../Components/Header'

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />

        {this.props.children}

      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}
