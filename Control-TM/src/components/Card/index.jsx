import './index.css'
import PropTypes from 'prop-types'

const Card = ({title, description, imageURL}) => {

    return (
        <div className='card'>
            <img className='' src={imageURL} alt=''/>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card