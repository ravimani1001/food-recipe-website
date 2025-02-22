import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function EditRecipe() {
    
    const [recipeData, setRecipeData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    // const mongoose = require('mongoose')
    // const objId = new mongoose.Types.ObjectId(id)

    useEffect( ()=>{
        const getData =async ()=>{
            await axios.get(`http://localhost:5000/recipe/${id}`)
            .then(response => {
                let res = response.data
                // console.log(res)
                // console.log(id)
                setRecipeData({
                    title : res.title,
                    ingredients : res.ingredients.join(","),
                    instructions : res.instructions,
                    time : res.time
                })
                // console.log("get wala done")
            })
            .catch((error)=>{console.log("Error : " , error)})
        }
        getData()
    },[])

    const onHandleChange = (e) => {
        let val = (e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file") ? e.target.files[0] : e.target.value
        setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
    }
    const onHandleSubmit = async (e) => {
        e.preventDefault()
        // console.log("HAHAHA THIS IS RECIPE DATA: " , recipeData)
        await axios.put(`http://localhost:5000/recipe/${id}` , recipeData,{
            headers:{
                'Content-Type':'multipart/form-data',
                'authorization':'bearer '+localStorage.getItem("token")
            }
        })
        .then(() => navigate("/myRecipe"))
        .catch((error)=>{console.log("Error : " , error)})
    }
    
    return (

        <>
            <div className='container'>
                <form className='form' onSubmit={onHandleSubmit} encType='multipart/form-data'>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" className='input' name="title" onChange={onHandleChange} value={recipeData.title}></input>
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input type="text" className='input' name="time" onChange={onHandleChange} value={recipeData.time}></input>
                    </div>
                    <div className='form-control'>
                        <label>Ingredients</label>
                        <textarea type="text" className='input-textarea' name="ingredients" rows="5" onChange={onHandleChange} value={recipeData.ingredients}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Instructions</label>
                        <textarea type="text" className='input-textarea' name="instructions" rows="5" onChange={onHandleChange} value={recipeData.instructions}></textarea>
                    </div>
                    <div className='form-control'>
                        <label>Recipe Image</label>
                        <input type="file" className='input' name="file" onChange={onHandleChange} required ></input>
                    </div>
                    <button type="submit">Edit Recipe</button>
                </form>
            </div>
        </>
    )
}
