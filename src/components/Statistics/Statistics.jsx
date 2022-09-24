import { useState, useEffect } from 'react'
import classes from './Statistics.module.scss'
import { PropTypes } from 'prop-types'

const Statistics = ({ good, neutral, bad }) => {
  const [total, setTotal] = useState(0)
  const [percent, setPercent] = useState(0)

  const countTotalFeedback = () => {
    const result = Object.values({ good, neutral, bad }).reduce((acc, item) => acc + item, 0)
    setTotal(() => result)
  }

  const countPositiveFeedbackPercentage = () => {
    const result = Math.floor(good / total * 100)
    setPercent(result)
  }

  useEffect(() => {
    countTotalFeedback()
    countPositiveFeedbackPercentage()
  }, [good, neutral, bad, total])


    return (
      <div className={classes.stats}>
        {total ? (
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}


export default Statistics
