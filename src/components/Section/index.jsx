import React, { Component } from 'react'
import classes from './Section.module.scss'
import { PropTypes } from 'prop-types'

class Section extends Component {

	static propTypes = {
		title: PropTypes.string,
	}

	render() {
		return (
			<div className={classes.section}>
				<h1>{this.props.title}</h1>
				<div>{this.props.children}</div>
			</div>
		)
	}
}


export default Section