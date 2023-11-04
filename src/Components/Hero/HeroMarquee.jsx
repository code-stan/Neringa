/* eslint-disable react/prop-types */
import { useRef } from "react";
import { services } from "./data"
import { useHeroContext } from "../hook/useServiceName"

function ServiceOption({service, index}){
    const btnRef = useRef(null)
    const {modal, setServiceName, setIndexNo} = useHeroContext();

    function onBtnClick(){
        setServiceName(btnRef.current.textContent);
        setIndexNo(index)
        modal.current.style.transform = "translateY(0)";
    }  
    return(
        <button className="service-option" onClick={onBtnClick} ref={btnRef}>
            {service}
        </button>
    )
} 
export default function HeroMarquee() {
  return (
    <div className="marquee">
        <div className="marquee-div">
            <div className="marquee-childEl">
                {services.map((data, i)=>{
                    return(
                        <ServiceOption key={i} index={i} {...data}/>
                    )
                })}
            </div>
            <div className="marquee-childEl">
                {services.map((data, i)=>{
                    return(
                        <ServiceOption key={i} index={i}{...data}/>
                    )
                })}
            </div>
        </div>
        <div className="marquee-div">
            <div className="marquee-childEl">
                {services.map((data, i)=>{
                    return(
                        <ServiceOption key={i} index={i}{...data}/>
                    )
                })}
            </div>
            <div className="marquee-childEl">
                {services.map((data, i)=>{
                    return(
                        <ServiceOption key={i} index={i}{...data}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
