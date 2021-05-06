import propTypes from 'prop-types'


const Button = ({btnText, color, onClick}) => {
    return (
        <button onClick={onClick} className="btn" style={{backgroundColor: color}}>
            {btnText}
        </button>
    )
}

Button.defaultProps = 
{
    color : 'steelblue'
}

Button.propTypes = 
{
    color : propTypes.string
}

export default Button
