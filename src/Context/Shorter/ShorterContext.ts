import { createContext, useContext } from "react";
import type { ShorterContextType } from "../../types";

export const ShorterContext = createContext<ShorterContextType | undefined>(undefined)

export const useShorter = () => {
    const context = useContext(ShorterContext)

    if(!context) {
        throw new Error('useShorter must be used within a ShorterProvider')
    }

    return context
}