import React from 'react'
import classes from './FeedbackOptions.module.scss'
import { PropTypes } from 'prop-types'

const FeedbackOptions = ({ options: [good, neutral, bad], onLeaveFeedback }) => {

    return (
      <div className={classes.buttons}>
        <button onClick={onLeaveFeedback(good)}>{good}</button>
        <button onClick={onLeaveFeedback(neutral)}>{neutral}</button>
        <button onClick={onLeaveFeedback(bad)}>{bad}</button>
      </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions
