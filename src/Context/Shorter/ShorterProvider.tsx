import { useState } from 'react';
import type { ShorterProviderProps } from '../../types';
import { ShorterContext } from './ShorterContext';

const BITLY_ACCESS_TOKEN = "19cc0ac42c6a1bc852e896de107edfb3d534a64a"; 
export default function ShorterProvider({children}:ShorterProviderProps){

    const [shortURL , setShortURL] = useState<string>('')

    const getShortening = async (longURL : string): Promise<string | void> => {
        if(!longURL) return

        const apiUrl = "https://api-ssl.bitly.com/v4/shorten";
        const requestBody = {
            long_url: longURL,
            domain: "bit.ly"
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${BITLY_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const data: {link: string} = await response.json();
            console.log('nt')
            setShortURL(data.link)
            console.log(shortURL)
            return data.link

        } catch (error) {
            console.error("Error shortening URL:", error);
            throw error;
        }
    }


    return (
        <ShorterContext.Provider value={{getShortening , shortURL}}>
            {children}
        </ShorterContext.Provider>
    );
}


