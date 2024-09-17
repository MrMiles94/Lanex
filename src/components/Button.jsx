import PropTypes from 'prop-types'

function Button({color, text, onClick}){
    
    return (
        <button onClick={onClick} style={{background:color}} className="btn">
            {text}
        </button>
    )
}

export default Button 