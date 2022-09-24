import classes from './Section.module.scss'
import { PropTypes } from 'prop-types'

const Section = ({ title, children }) => {

    return (
      <div className={classes.section}>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Section
