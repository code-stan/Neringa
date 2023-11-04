import { useEffect, useRef } from "react";
import { useHeroContext } from "../hook/useServiceName";
import { servicesDesc } from "./data";

export default function HeroModal() {
  const { modal, serviceName, indexNo} = useHeroContext();
  let translateValue = useRef("translateY(85vh)");
  const imageRef = useRef(null)

  function mobileWidth(){
    if(window.innerWidth <= 1200){
      translateValue.current = "translateY(100vh)"
    }
  }
  mobileWidth()
  useEffect(()=>{
    let imageEl = imageRef.current;
    function forMobile(){
      mobileWidth()
    }
    function onFullscreen(){
      if(!document.fullscreenElement){
        imageEl.requestFullscreen()
      }
      else{
        document.exitFullscreen()
      }
    }
    window.addEventListener("resize", forMobile);
    imageEl.addEventListener("dblclick", onFullscreen)
    
    
    return ()=>{
      window.removeEventListener("resize", forMobile); 
      imageEl.removeEventListener("dblclick", onFullscreen)
    }
  }, [])
  
  function closeModal(){
    modal.current.style.transform = translateValue.current;
  }
  return (
    <section className="modal" ref={modal}>
        <header className="modal-nav">
            <div className="name">{serviceName}</div>
            <div className="btn-container">
                <button className="close" type="button" aria-label="close modal" role="button" onClick={closeModal}>Close</button>
            </div>
        </header>
        <div className="modal-content">
            <div className="text">
                <a href="#" target="_blank">View Site</a>
                <p>{servicesDesc[indexNo].servicesDesc}</p>
            </div>
            <div className="image">
                <img src={`./Assets/${serviceName}.jpeg`} alt="" ref={imageRef} />
            </div>
        </div>
    </section>
  )
}
