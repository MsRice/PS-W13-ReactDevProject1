import gor_logo from '../../../assets/images/gor_logo.png'
import shortly_logo from '../../../assets//images/svgs/logo.svg'

const NavDesktop = () => {
    return (
        <div className="nav__menu desktop">
            <div className="nav_side_a">
                <div className="logo__wrapper">
                    <img className="logo_gor" src={gor_logo} alt=""/>
                    <img className="logo_shortly" src={shortly_logo} alt=""/>
                </div>
                <ul className="nav__links ">
                <li className="nav__link">Features</li>
                <li className="nav__link">Pricing</li>
               <li className="nav__link">Resources</li> 
                </ul>
            </div>
            <div className="nav_side_b">
                <ul className="nav__links">
                    <li className="nav__link">Login</li>
                    <li className="nav__link primary">Sign Up</li>
                </ul>
            </div>
        </div>
    );
}

export default NavDesktop;
