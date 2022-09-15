import React, { Component } from 'react'
import classes from './Section.module.scss'
import { PropTypes } from 'prop-types'

class Section extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    const { title, children } = this.props;
    return (
      <div className={classes.section}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    )
  }
}


export default Section
