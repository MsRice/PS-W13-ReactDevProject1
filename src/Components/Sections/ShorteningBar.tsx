
const ShorteningBar = () => {
    return (
        <>
        <section className="container" id="shortening">
        
            {/* <!-- split background --> */}
            <div className="shortening--wrapper">
                <form className="shortening--form" id="shortening--form">

                    <input type="text" className="origin-link--bar" id="origin-link" placeholder="Shorten a link here.."/>
                    <button className="primary primary-sqr" type="submit">Shorten It!</button>
                </form>
                <div className="add-link--wrapper">
                    <span className="add-link">Please add a link</span>

                </div>
            </div>
            
        </section>
        <section className="container" id="shortened">

            <div className="shortened--wrapper" id="shortened--wrapper">
               
            </div>
        </section>
        </>
    );
}

export default ShorteningBar;
