import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/NavBar.css';


class NavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    renderBackButton () {
        let currentPath = this.context.router.route.location.pathname;
        if (currentPath === '/') {
            return false;
        }
        return true;
    }

    render () {
        const renderBackButton = this.renderBackButton();
        return (
            <div>
                <header className="component-NavBar navbar">
                    <div className="e-mail">
                    <img id='email' src="https://www.degree53gaming.com/img/icon-email.svg" alt="Degree53" />
                    <a>
                        <span className='header'>
                            info@degree53.com
                        </span>
                    </a>
                    </div>
                      <div className="phone-num">
                    <img id='email' src="https://www.degree53gaming.com/img/icon-tel.svg" alt="Degree53" />
                    <a>
                        <span className='header'>
                            +44 (0)161 359 4000
                        </span>
                    </a>
                    </div>
                   
                    <img id='logo' src="https://www.degree53gaming.com/img/d53-logo-icon-grn.svg" alt="Degree53" />
                </header>
                <div id='grey-bar'>
                    {renderBackButton && (<Link id='back-button' to='/' className='button is-primary'>Back</Link>)}
                 </div>
                 <main>
                {this.props.children}
                 </main>
                <footer id='footer-bar'>
                    <img id='location-dropper'src="https://www.degree53gaming.com/img/footer-logo.png" alt=""/>
                    <p className='contact-deets'>Degree 53, The Sharp Project, Thorp Road, Newton Heath, Manchester, M40 5BJ</p>
                    <p className='contact-deets'><span className='make-bold'>E</span> : <a className='footer-contact'>info@degree53.com </a>| <span className='make-bold'>T</span> :<a className='footer-contact'>+44 (0)161 359 4000</a></p>
                    <p className='contact-deets'>© Degree 53 Gaming | All Rights Reserved | Designed and Developed by Degree 53 | <a className='footer-contact'>Privacy Policy</a></p>
                    <p className='contact-deets'>Degree 53 is licensed and regulated by the <a className='footer-contact'>UK Gambling Commission.</a> Licence number 41051.</p>
                </footer>
            </div>

        );
    }
}

NavBar.contextTypes = {
    router: PropTypes.object
};
export default NavBar;

NavBar.propTypes = {
    children: PropTypes.object.isRequired,
  
};
