
import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import Contact from './Contact'
import { useGlobalContext } from './context'

const Home = () => {
 

  // const data={
  //   name:"Get your Dream Job",
  //   image:"./images/hero.svg"
  // }
  const {updateHomePage}=useGlobalContext()

  useEffect(()=>{
    updateHomePage();
  },[]);
  
  return (<>
 
   <HeroSection />
   <Contact/>
   </>
  )
}

export default Home