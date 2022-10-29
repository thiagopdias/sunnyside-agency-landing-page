import Cardimage from "../cards/Cardimage"

import './SectionImages.css'

function SectionImages() {
    return (
        <section className="imagesContainer">
            <Cardimage customClass="milk" />

            <Cardimage customClass="orange" />

            <Cardimage customClass="cone" />

            <Cardimage customClass="sugar" />
        </section>
    )
}

export default SectionImages