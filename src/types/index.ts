export type ShorterContextType = {
  shortList: ShorterObj[]
  getShortening: (longURL: string) => Promise<string|void>;
}

export interface ShorterProviderProps {
    children: React.ReactNode
}

export interface ShorterObj {
    longURL:string
    shortURL:string
}