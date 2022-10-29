import './Cardimage.css'

function Cardimage({customClass, title, text}) {
    return (
        <div className={`image ${customClass}`}>
            <h1>{title}</h1>

            <p>{text}</p>
        </div>
    )
}

export default Cardimage