import React from 'react';
import './FoodCard.css';

const FoodCard = ({ meal,addFood }) => {
    return (
            <div 
            
            className='card'>
            <img
            className='card-thumb'
            src={meal.strMealThumb} 
            alt={meal.strMeal} />
            
            <div className='card-info'>
            <h3 className='card-title'>{meal.strMeal}</h3>
            <div>
            <p 
            className='card-category'
            title='category'>
              {meal.strCategory} </p>
            <p 
            className='card-origin'
            title='origin'>{meal.strArea}</p>
            </div>
            <p className='card-tag'>{meal.strTags}</p>
           
            <hr />

            <button 
            className='add-to-list'
            onClick={() => addFood(meal.strMeal)}
            >Add To List</button>
            </div>
        </div>
    );
};

export default FoodCard;