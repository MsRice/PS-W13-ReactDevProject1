
const Nav = () => {
    return (
        <div className="container">
        <nav>
            <div className="nav_side_a">
                <div className="logo__wrapper">
                    <img className="logo_gor" src="./image/gor_presents.png" alt=""/>
                    <img className="logo_shortly" src="./image/from_figma/logo.svg" alt=""/>
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
            <div className="nav__menu">
                <div>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <nav className="nav__links-dropdown--wrapper">
                    <ul className="nav__links-dropdown">
                        <li className="nav__links-dropdown--link">Features</li>
                        <li className="nav__links-dropdown--link">Pricing</li>
                        <li className="nav__links-dropdown--link">Resources</li>
                        <li className="nav__links-dropdown--link">Login</li>
                        <li className="nav__links-dropdown--link primary">Sign Up</li>

                    </ul>

                </nav>

            </div>
        </nav>
    </div>
    );
}

export default Nav;
