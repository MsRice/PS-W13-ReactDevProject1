import RiceCodesLogo from '../../assets/images/Rice_logo_only_no_background.png'
const Footer = () => {
    return (
        <footer>
        <div className="footer--wrapper">
            <div className="logo__link">Shortly</div>
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
                <li className="footer__link"><a href="https://app.joinhandshake.com/profiles/gqqjmh" target="_blank"><i className="fa-solid fa-handshake"></i></a></li>
                <li className="footer__link"><a href="https://https://github.com/MsRice" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                <li className="footer__link"><a href="https://www.linkedin.com/in/patrice-maxwell" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
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
