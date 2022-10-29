import Cardimage from '../cards/Cardimage'
import Cardinfo from '../cards/Cardinfo'

import './SectionCards.css'

function SectionCards() {
    return (
        <section className='cardsContainer'>
        <div id='firstCards'>
          <Cardinfo
            title="Transform your brand"
            text="We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you."
            customClass='yellow'
          />

          <Cardimage customClass='transform' />
        </div>

        <div id='secondCards'>
          <Cardinfo
            title="Stand out to the right audience"
            text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
            customClass='red'
          />

          <Cardimage customClass='standOut'/>
        </div>

        <div id='thirdCards'>
          <Cardimage 
            customClass='graphicDesign'
            title="Graphic design"
            text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
          />

          <Cardimage 
            customClass='photography'
            title="Photography"
            text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          />
        </div>
      </section>
    )
}

export default SectionCards