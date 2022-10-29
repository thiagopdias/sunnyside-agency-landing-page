import './CardTestimonials.css'

function CardTestimonials({image, alt, text, name, profession}) {
    return (
        <div className="cardTestimonials">
            <img src={image} alt={alt} />

            <p>{text}</p>

            <span id='name'>{name}</span>

            <span id='profession'>{profession}</span>
        </div>
    )
}

export default CardTestimonials