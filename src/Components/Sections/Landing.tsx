import  landingworking from '../../assets/images/svgs/illustration-working.svg'
const Landing = () => {
    return (
        <section className="container" id="landing">
            <div className="row">
                <div className="landing--wrapper">

                    
                    <img className="landing__img--image" src={landingworking} alt=""/>
                    
                    <div className="landing__info--wrapper">
                        <div className="landing__info--title">More than just shorter links</div>
                        <div className="landing__info--sub-title"> Build your brand’s recognition and get detailed insights on how your links are performing.</div>
                        <button className="landing__info--btn primary">Get Started</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Landing;
