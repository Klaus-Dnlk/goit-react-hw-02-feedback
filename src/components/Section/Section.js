import PropTypes from 'prop-types'
import s from './section.module.scss'


function Section ({title, children}) {
    return (
        <section>
            <h1 className={s.title}>{title}</h1>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
}

export default Section

