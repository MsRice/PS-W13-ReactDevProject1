import RiceCodesLogo from '../../assets/images/Rice_logo_only_no_background.png'
import { FaHandshake } from "react-icons/fa";
import { FaGithub , FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
        <div className="footer--wrapper">
            <a href='#' className="logo__link">Shortly</a>
            <div className="connect__links">
                <ul className="connect__links--wrapper">
                    <li className="connect__link--header">Features</li>

                    <li className="connect__link">Link Shortening</li>
                    <li className="connect__link">Branded Links</li>
                    <li className="connect__link">Analytics</li>
                </ul>
                <ul className="connect__links--wrapper">
                    <li className="connect__link--header">Resources</li>

                    <li className="connect__link">Blog</li>
                    <li className="connect__link">Developers</li>
                    <li className="connect__link">Support</li>
                </ul>
                <ul className="connect__links--wrapper">
                    <li className="connect__link--header">Company</li>

                    <li className="connect__link">About</li>
                    <li className="connect__link">Our Team</li>
                    <li className="connect__link">Careers</li>
                    <li className="connect__link">Contact</li>
                </ul>
            </div>
            <ul className="social__links">
                <li className="footer__link"><a href="https://app.joinhandshake.com/profiles/gqqjmh" target="_blank"><FaHandshake /></a></li>
                <li className="footer__link"><a href="https://www.github.com/MsRice" target="_blank"><FaGithub /></a></li>
                <li className="footer__link"><a href="https://www.linkedin.com/in/patrice-maxwell" target="_blank"><FaLinkedin /></a></li>
                <li className="footer__link"><a href="https://www.thegrainofrice.com/patricemaxwell" target="_blank"><img className="footer__img" src={RiceCodesLogo} alt="" /></a></li>
            </ul>
        </div>
        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Rice</a>.
        </div>
    </footer>
    );
}

export default Footer;
