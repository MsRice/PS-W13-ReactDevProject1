import { useState } from 'react';
import type { ShorterObj, ShorterProviderProps } from '../../types';
import { ShorterContext } from './ShorterContext';

const BITLY_ACCESS_TOKEN = import.meta.env.VITE_BITLY_ACCESS_TOKEN 
export default function ShorterProvider({children}:ShorterProviderProps){

    const [shortList , setShortList] = useState<ShorterObj[]>([])

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
            setShortList(prev => [...prev,
                {
                    longURL:longURL,
                    shortURL:data.link
                }
            ])
            // console.log(shortURL)
            return data.link

        } catch (error) {
            console.error("Error shortening URL:", error);
            throw error;
        }
    }


    return (
        <ShorterContext.Provider value={{getShortening , shortList}}>
            {children}
        </ShorterContext.Provider>
    );
}


