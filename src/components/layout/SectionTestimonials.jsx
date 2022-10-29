import CardTestimonials from "../cards/CardTestimonials"

import imageEmily from '../../images/image-emily.jpg'
import imageJennie from '../../images/image-jennie.jpg'
import imageThomas from '../../images/image-thomas.jpg'

import './SectionTestimonials.css'

function SectionTestimonials() {
    return (
        <section className="testimonialContainer">
            <h1>Client testimonials</h1>

            <div id="cardsTestimonials">
                <CardTestimonials
                    image={imageEmily}
                    alt="photo of Emily"
                    text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                    name="Emily R."
                    profession="Marketing Director"
                />
                <CardTestimonials
                    image={imageThomas}
                    alt="photo of Thomas"
                    text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                    name="Thomas S."
                    profession="Chief Operating Officer"
                />
                <CardTestimonials
                    image={imageJennie}
                    alt="photo of Jennie"
                    text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                    name="Jennie F."
                    profession="Business Owner"
                />
            </div>
        </section>
    )
}

export default SectionTestimonials