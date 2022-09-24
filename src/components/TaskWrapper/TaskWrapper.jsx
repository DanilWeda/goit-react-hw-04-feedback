import { useState } from 'react'
import classes from './TaskWrapper.module.scss'
import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'

const TaskWrapper = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleChange = (option) => () => {
    switch (option) {
      case 'good': setGood(good + 1)
        break
      case 'neutral': setNeutral(neutral + 1)
        break
      case 'bad': setBad(bad + 1)
        break
      default:
        break
    }
  }

    const options = ['good', 'neutral', 'bad'];

    return (
      <div className={classes.wrapper}>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
        </Section>
      </div>
    )
}


export default TaskWrapper
