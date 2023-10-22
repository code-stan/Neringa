import Hero from "./Hero"
import "../Styles/style.scss"
import { useState, useEffect } from "react"

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    function smoothIntro(){
      const body = document.body;
      loaded? body.style.opacity = 1 : body.style.opacity = 0;
    }
    smoothIntro()
    function doneLoading(){
       setLoaded(true)
       smoothIntro()
    }
    setTimeout(doneLoading, 850)
  }, [loaded])
  return (
    <>
      {loaded && <Hero/>}
    </>
  )
}

export default App