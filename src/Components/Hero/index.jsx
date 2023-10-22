import { useState, useEffect, useRef } from "react"
import { heroContext } from "../hook/useServiceName";
import HeroHeader from "./HeroHeader";
import HeroMarquee from "./HeroMarquee";
import HeroModal from "./HeroModal";
import HeroFooter from "./HeroFooter";

import "./hero.scss"

export default function Hero() {
  const [serviceName, setServiceName] = useState("name");
  const modal = useRef(null)
  useEffect(()=>{
    const colorPalette = ["596b4b", "5253ba", "ab9985", "906892", "f0c73f", "d7d6d5", "c6c4c6", "9a7e5d", "5e624d", "8b2e1d"];
    function shuffleBg(){
      const body = document.body;
      const randomNum = Math.floor(Math.random() * colorPalette.length)
      body.style.backgroundColor = `#${colorPalette[randomNum]}`;
    }
    setInterval(shuffleBg, 2220)
      
  }, [])
  
  

  return (
    <heroContext.Provider value={{serviceName, setServiceName, modal}}>
        <section className="hero">
            <HeroHeader/>
            <HeroMarquee/>
            <HeroModal/>
            <HeroFooter/>
        </section>
    </heroContext.Provider>
  )
}
