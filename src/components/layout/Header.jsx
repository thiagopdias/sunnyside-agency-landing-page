import arrowDown from '../../images/icon-arrow-down.svg'

import './Header.css'
import Navbar from './Navbar'

function Header() {
    return (
        <header className="headerContainer">
            <Navbar />

            <h1>We are creatives</h1>

            <img src={arrowDown} alt="icon arrow down" id='arrowDown' />
        </header>
    )
}

export default Header