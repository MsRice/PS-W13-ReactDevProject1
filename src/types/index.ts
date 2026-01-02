export type ShorterContextType = {
  shortURL: string
  getShortening: (longURL: string) => Promise<string|void>;
}

export interface ShorterProviderProps {
    children: React.ReactNode
}