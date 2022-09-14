import React, { Component } from 'react'
import classes from './TaskWrapper.module.scss'
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'

class TaskWrapper extends Component {
	constructor() {
		super();

		this.state = {
			good: 0,
			neutral: 0,
			bad: 0
		};
	}

	handleChange = (option) => () => {
		this.setState({ [option]: this.state[option] + 1 })
	}

	render() {
		const options = ['good', 'neutral', 'bad'];

		return (
			<div className={classes.wrapper}>
				<Section title="Statistics">
					<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
				</Section>
				<Section title="Please leave feedback">
					<FeedbackOptions options={options} onLeaveFeedback={this.handleChange} />
				</Section>
			</div>
		)
	}
}


export default TaskWrapper