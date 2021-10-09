import React from 'react'
import PropTypes from 'prop-types'
import s from './feedbackOptions.module.scss'


function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div className={s.buttonsBox}>
            {options.map(option => (
                <button type='button'className={s.button} name={option}onClick={onLeaveFeedback}>{option}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions