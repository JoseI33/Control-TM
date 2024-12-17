import PropTypes from 'prop-types'

const Card = ({title, description}) => {
    console.log('Props recibido en card:', {title, description})
    return (
        <div className='p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white hover:bg-blue-50 transition-all'>
            <h2 className='text-xl font-bold mb-2 text-blue-600'>{title}</h2>
            <p className='text-gray-700'>{description}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card