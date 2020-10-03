import React from 'react';
import style from './recipe.module.css'


const Recipe=({title,calories,image,ingredients,link})=>{

  return(
    <div className={style.recipe}>
    <h1>{title}</h1>
    <ol>
    {ingredients.map(ingredient=>(<li>{ingredient.text}</li>))}
    </ol>
    <p>{Math.round(calories)} Calories</p>
    <a href={link}>Click for full recipe</a>
    <img className={style.image} src={image} alt="none"/>
    </div>

  )
};

export default Recipe;
