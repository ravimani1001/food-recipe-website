import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen , setIsOpen] = useState(false)
    const addRecipe = ()=>{
        let token = localStorage.getItem("token")
        if(token)
        {
            navigate("/addRecipe")
        }
        else
        {
            setIsOpen(true)
        }
        
    }
  return (
    <>
        
        <section className='home'>
            <div className="left">
                <h1>Every recipe is a story</h1>
                <h5>Every dish has a story to tell, and we’d love to hear yours. Share your favorite recipes and let your culinary creations weave tales of flavor, tradition, and love. Inspire fellow food lovers with your delicious recipes.</h5>
                <button onClick={addRecipe}>Share your recipe</button>
            </div>
            <div className="right">
                <img src={foodRecipe} width= "320px" height="300px" />
            </div>
        </section>
        <div className="bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,96L30,112C60,128,120,160,180,165.3C240,171,300,149,360,128C420,107,480,85,540,101.3C600,117,660,171,720,202.7C780,235,840,245,900,234.7C960,224,1020,192,1080,197.3C1140,203,1200,245,1260,240C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </div>
        {(isOpen) && <Modal onClose = { ()=>setIsOpen(false) }> <InputForm setIsOpen={()=>setIsOpen(false)}/> </Modal> }
        <div className='recipe'>
            <RecipeItems/>
        </div>
    </>
  )
}
