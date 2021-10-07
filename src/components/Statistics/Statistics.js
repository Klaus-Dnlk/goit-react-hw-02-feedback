import PropTypes from 'prop-types'
import s from './statistics.module.scss'




function Statistics ({good, neutral, bad, total, percentage}) {
    return (
    <div className={s.statList}>
        <span className={s.label}>Good: {good}</span>
        <span className={s.label}>Neutral: {neutral}</span>
        <span className={s.label}>Bad: {bad}</span>
        <span className={s.label}>Total: {total}</span>
        <span className={s.label}>Percentage: {percentage}%</span>
    </div>
    )
}

Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.string,
}




export default Statistics