import './Cardinfo.css'

function Cardinfo({title, text, customClass}) {
    return (
        <div className="infos">
            <h1>{title}</h1>

            <p>{text}</p>

            <button className={customClass}>Lear more</button>
        </div>
    )
}

export default Cardinfo