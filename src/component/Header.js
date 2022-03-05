import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAdd, onAdd}) => {
    
    return (
        <header className='header'>
                <h1>{title}</h1>
                <Button color={onAdd ? 'gray' : 'green'} text={onAdd ? 'Close' : 'Add'} onClick={showAdd}/>
        </header>
    )
}

Header.defaultProps = {
    'title': 'Task Tracker'
}

Header.propTypes = {
    'title': PropTypes.string,
}


const HeadingStyle = {
    'backgroundColor': 'blue',
    'color':'red'
}

export default Header