 
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SectionFive from './components/SectionFive'
import SectionFour from './components/SectionFour'
import SectionOne from './components/SectionOne'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger } from 'gsap/ScrollTrigger'
function App() {
 
gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
useGSAP(()=>{
  let tl_1=gsap.timeline();
  let tl_2=gsap.timeline({
    scrollTrigger:{
      trigger:".section-2",
      start:"top center",
    }
  })
  let tl_3=gsap.timeline({
    scrollTrigger:{
      trigger:".section-3",
      start:"top center",
    }
  })
  let tl_4=gsap.timeline({
    scrollTrigger:{
      trigger:".section-4",
      start:"top center",
    }
  })
  let tl_5=gsap.timeline({
    scrollTrigger:{
      trigger:".section-5",
      start:"top center",
    }
  })

  tl_1.from(".bg-1",{xPercent:100,duration:2},0)
  tl_1.from(".txt",{x:50,duration:2})
  tl_1.from(".txt",{opacity:0,duration:2},2)
  tl_1.from(".btn-2",{x:-125})
  tl_1.from(".btn-1",{x:60,opacity:0},"<")
  tl_1.from(".icon",{opacity:0,y:50,duration:2})

  tl_2.from(".box-1",{x:200,duration:2,delay:0.4})
  tl_2.from(".box-2",{x:-200,duration: 2},0)
  tl_2.from(".box-3",{x:200,duration: 2},0)
  tl_2.from(".text-content_s2",{x:-500,duration:1.5},0)
  tl_2.from(".sm-text",{y:-100,duration:1},0.7)

  tl_3.from(".bg-3",{x:-900,duration:2})
  tl_3.from(".white-box",{scaleY:0,duration:1},0.5)
  tl_3.from(".white-box-content",{opacity:0,duration:1})
  tl_3.from(".text-content_s3",{x:-500,duration: 1},0.5)
  
  tl_4.from(".img_1",{x:-1000,duration:2},0.5)
  tl_4.from(".img_2",{x:-1000,duration:2},0)
  tl_4.from(".bg-4",{x:-1000,duration:2},0.5)
  tl_4.from(".txt-1",{opacity:0,duration:1},1)
  tl_4.from(".txt-2",{opacity:0,duration:1},1.2)
  tl_4.from(".txt-3",{opacity:0,duration:1},0.8)
  tl_4.from(".txt-4",{opacity:0,duration:1},1.2)

  tl_5.from(".bg-5",{scaleY:0,duration:1})
  tl_5.from(".side-1",{x:200,opacity:0,duration:1},1)
  tl_5.from(".side-2",{x:-200,opacity:0,duration:1},1)
})
  return (
    <>
       <NavBar/>
       <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
       <SectionFive/>
       <Footer/>
    </>
  )
}

export default App
