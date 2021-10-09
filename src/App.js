import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types';
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Notification from './components/Notification/Notification'
import s from './App.module.scss'



class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0.
};

static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number
}

state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad
}

countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
}

countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback()
    const percentage = (this.state.good * 100) / total
    return Math.round(percentage);
}

onLeaveFeedback = (e) => {
    const target = e.target.name;
    this.setState(prevState => ({
        [target]: prevState[target] + 1
    }))
}


render() {
    const {good, neutral, bad} = this.state
    const total = this.countTotalFeedback()
    const percentage = this.countPositiveFeedbackPercentage()
    const options = Object.keys(this.state)
    
    return (
        <div className={s.section}>
           <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
            </Section>
            <Section title="Statistics">
                {total !== 0 ?
                <Statistics
                good={good} 
                neutral={neutral} 
                bad={bad} 
                total={total} 
                percentage={percentage}
                />
                : <Notification message="No feedback given"/>

                }
                
            </Section>
        </div>
    )
}
}




export default App;
