import { useState } from "react";
import { useShorter } from "../../Context/Shorter/ShorterContext";

const ShorteningBar = () => {
    const { getShortening  , shortList} = useShorter()

    const [longURL , setLongURL] = useState<string>('')
    const [ copyiedId , setCopyiedId ] = useState<number | null>(null)

    function handleForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        getShortening(longURL)
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

                {shortList.map( (short, index) => (
                    <div className="shortened-link--wrapper" key={index}>
                        <p className="short__long--str">{short.longURL}</p>
                        
                            <p className="short__srt--str">${short.shortURL}</p>


                        
                        <button 
                            className={` copy ${copyiedId == index ? 'copied' : ' '} copy-btn`} 
                            type="button"
                            aria-describedby={`short-url-${index}`}
                            onClick={() => {
                                navigator.clipboard.writeText(short.shortURL)
                                setCopyiedId(index)
                            }}>
                                {copyiedId === index ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    ))}
            </div>
            </section>
        </>
    );
}

export default ShorteningBar;
