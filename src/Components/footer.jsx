import white_logo from '../Assets/logo-white.svg'

function Footer() {
    return (
        <div className="footer-container">
            <img src={white_logo} alt="logo Kasa blanc" className="white_logo"/>
            <p className='footer-title'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer