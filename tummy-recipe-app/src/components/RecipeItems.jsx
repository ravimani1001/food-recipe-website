import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import foodImg from "../assets/foodRecipe.png"
import { BsStopwatchFill } from "react-icons/bs"
import { FaHeart } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { all } from 'axios'


export default function RecipeItems() {
  // const allRecipes = useLoaderData()
  let path = window.location.pathname === "/myRecipe" ? true : false
  // console.log(allRecipes)
  
  const allRecipes = [
    {
      title : "Recipe 1",
      coverImage : "/justRecipe.jpeg",
    },
    {
      title : "Recipe 2",
      coverImage : "/justRecipe.jpeg",
    },
    {
      title : "Recipe 3",
      coverImage : "/justRecipe.jpeg",
    },
    {
      title : "Recipe 4",
      coverImage : "/justRecipe.jpeg",
    },
    {
      title : "Recipe 5",
      coverImage : "/justRecipe.jpeg",
    },
    {
      title : "Recipe 6",
      coverImage : "/justRecipe.jpeg",
    },
  ]
  return (
    <>
      <div className='card-container'>
        {
            allRecipes?.map((item , index)=>{
              return(
                <div key={index} className="card">
                  <img src={`${item.coverImage}`} width="120px" height="100px" />
                  <div className="card-body">
                    <div className="title">{item.title}</div>
                    <div className="icons">
                      <div className="timer"><BsStopwatchFill />30 min</div>
                      {(!path) ? <FaHeart /> : 
                      <div className="action">
                        <Link to = {`/editRecipe/${item._id}`} className = 'editIcon'><FaEdit /></Link>
                        <MdDelete className='deleteIcon'/>
                      </div>}
                      
                    </div>
                  </div>

                </div>
              )
            })
        }
      </div>
    </>
  )
}
