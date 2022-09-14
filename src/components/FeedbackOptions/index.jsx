import React, { Component } from 'react'
import classes from './FeedbackOptions.module.scss'
import { PropTypes } from 'prop-types'

class FeedbackOptions extends Component {

	static propTypes = {
		good: PropTypes.number,
		neutral: PropTypes.number,
		bad: PropTypes.number,
		total: PropTypes.number,
		positivePercentage: PropTypes.number,
	}

	render() {
		const [good, neutral, bad] = this.props.options

		return (
			<div className={classes.buttons}>
				<button onClick={this.props.onLeaveFeedback(good)}>{good}</button>
				<button onClick={this.props.onLeaveFeedback(neutral)}>{neutral}</button>
				<button onClick={this.props.onLeaveFeedback(bad)}>{bad}</button>
			</div>
		)
	}
}


export default FeedbackOptions