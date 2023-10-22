import { useContext, createContext } from "react"

const heroContext = createContext();
const useHeroContext = () => useContext(heroContext)

export {heroContext, useHeroContext}
