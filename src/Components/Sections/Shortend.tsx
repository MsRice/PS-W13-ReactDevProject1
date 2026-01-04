import { useState } from 'react';
import { useShorter } from '../../Context/Shorter/ShorterContext';

const Shortend = () => {
    const {shortList} = useShorter()
    const [ copyiedId , setCopyiedId ] = useState<number | null>(null)

    
    return (
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
    );
}

export default Shortend;
