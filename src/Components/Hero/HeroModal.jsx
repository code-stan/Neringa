import { useEffect, useRef } from "react";
import { useHeroContext } from "../hook/useServiceName";

export default function HeroModal() {
  const { modal, serviceName} = useHeroContext()
  let translateValue = useRef("translateY(85vh)");
  function mobileWidth(){
    if(window.innerWidth <= 1200){
      translateValue.current = "translateY(100vh)"
    }
  }
  mobileWidth()
  useEffect(()=>{
    function forMobile(){
      mobileWidth()
       console.log(translateValue.current)
    }
    window.addEventListener("resize", forMobile);

    return ()=>{
      window.removeEventListener("resize", forMobile); 
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quia error totam ea in dolore architecto sed praesentium iure exercitationem. Nostrum officia magni repellendus eos minus natus illum voluptate corporis.</p>
            </div>
            <div className="image">
                <img src={`./Assets/${serviceName}.jpg`} alt="" />
            </div>
        </div>
    </section>
  )
}
