import React from 'react';
import style from './recipe.module.css'

const Recipes = ({title,calories,imageurl,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={imageurl} alt="Recipe pic"/>
        </div>
    )
}

export default Recipes;