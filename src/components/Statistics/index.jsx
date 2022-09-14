import React, { Component } from 'react'
import classes from './Statistics.module.scss'
import { PropTypes } from 'prop-types'

class Statistics extends Component {

	constructor() {
		super();

		this.state = {
			total: 0,
			percent: 0,
		};
	}

	static propTypes = {
		good: PropTypes.number,
		neutral: PropTypes.number,
		bad: PropTypes.number,
	}

	countTotalFeedback = () => {
		return Object.values(this.props).reduce((acc, item) => acc + item, 0)
	}

	countPositiveFeedbackPercentage = () => {
		return Math.floor(this.props.good / this.state.total * 100)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({ total: this.countTotalFeedback() })
		}

		if (this.state.total !== prevState.total) {
			this.setState({ percent: this.countPositiveFeedbackPercentage() })
		}
	}

	render() {
		return (
			<div className={classes.stats}>
				{this.state.total ? (
					<div className={classes.stats}>
						<span >good: {this.props.good}</span>
						<span>neutral: {this.props.neutral}</span>
						<span>bad: {this.props.bad}</span>
						<span>total: {this.state.total}</span>
						<span>positive percent: {this.state.percent}%</span>
					</div>
				) : (
					<p>No feedback given</p>
				)}

			</div>
		)
	}
}


export default Statistics