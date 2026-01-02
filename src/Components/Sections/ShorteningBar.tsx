import { useState } from "react";
import { useShorter } from "../../Context/Shorter/ShorterContext";

const ShorteningBar = () => {
    const { getShortening  , shortURL} = useShorter()
    const [longURL , setLongURL] = useState<string>('')

    function handleForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        // console.log(longURL)
        getShortening(longURL)
        console.log(shortURL)
    }
    return (
        <>
        <section className="container" id="shortening">
        
            {/* <!-- split background --> */}
            <div className="shortening--wrapper">
                <form className="shortening--form" id="shortening--form" onSubmit={handleForm}>

                    <input type="text" className="origin-link--bar" id="origin-link" placeholder="Shorten a link here.." value={longURL} onChange={ e => setLongURL(e.target.value)}/>
                    <button className="primary primary-sqr" type="submit" >Shorten It!</button>
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
