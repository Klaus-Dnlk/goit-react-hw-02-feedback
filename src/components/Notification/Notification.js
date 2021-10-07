import PropTypes from 'prop-types'
import s from '../Statistics/statistics.module.scss'

function Notification ({message}) {
    return (
        <p className={s.label}>{message}</p>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}


export default Notification