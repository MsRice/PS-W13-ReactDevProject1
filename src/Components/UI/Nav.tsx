
import NavDesktop from './Desktop/NavDesktop';
import NavMobile from './Mobile/NavMobile';

const Nav = () => {
    return (
    <div className="container">
        <nav>
            <NavDesktop />
            <NavMobile />
        </nav>
    </div>
    );
}

export default Nav;
