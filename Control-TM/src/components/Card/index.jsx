import './index.css'
import PropTypes from 'prop-types'

const Card = ({title, description, imageURL}) => {

    return (
        <div className="card-conteiner">
            <div className='card'>
                <img className='card-image' src={imageURL} alt=''/>
                <h2 className='card-title'>{title}</h2>
            </div>
            <p className='card-description'>{description}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
}

export default Card