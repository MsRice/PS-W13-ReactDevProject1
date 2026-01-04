import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import gor_logo from '../../../assets/images/gor_logo.png'
import shortly_logo from '../../../assets//images/svgs/logo.svg'
import { useEffect, useState } from "react";
const NavMobile = () => {
    const [isOpen , setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        document.body.classList.toggle('menu-open', isOpen);
    }, [isOpen]);

    return (
        <>
            <div className="logo__wrapper">
                <img className="logo_gor" src={gor_logo} alt=""/>
                <img className="logo_shortly" src={shortly_logo} alt=""/>
            </div>
            <div className={`nav__bars--wrapper ${isOpen ? 'hidden' : ''}`}
                aria-expanded={isOpen}
                aria-controls="nav-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsOpen(o => !o)}>

                <FaBars className="fa-bars" aria-hidden="true"/>
            </div>
            <div
                className={`backdrop ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(false)}
                ></div>
            <nav className={`nav__links-dropdown--wrapper ${isOpen ? 'open' : ''}`}>
                <div className='nav__cross--wrapper'                
                onClick={() => setIsOpen(o => !o)}>
                <RxCross2 className="ra-cross" aria-hidden="true"/>
                </div>
                <ul className="nav__links-dropdown">
                    <li className="nav__links-dropdown--link">Features</li>
                    <li className="nav__links-dropdown--link">Pricing</li>
                    <li className="nav__links-dropdown--link">Resources</li>
                    <li className="nav__links-dropdown--link">Login</li>
                    <li className="nav__links-dropdown--link primary">Sign Up</li>

                </ul>

            </nav>
        </>
    );
}

export default NavMobile;
