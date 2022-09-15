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
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
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
    const { good, neutral, bad } = this.props
    const { total, percent } = this.state
    return (
      <div className={classes.stats}>
        {this.state.total ? (
          <div className={classes.stats}>
            <span >good: {good}</span>
            <span>neutral: {neutral}</span>
            <span>bad: {bad}</span>
            <span>total: {total}</span>
            <span>positive percent: {percent}%</span>
          </div>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    )
  }
}


export default Statistics
