import React, { useEffect, useState } from 'react';
import FoodCard from '../FoodCard/FoodCard';
import Sidebar from '../Sidebar/Sidebar';
import './Body.css';

const Body = () => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])
    const [sideMeal, setSideMeal] = useState([]);
    const addFood = (id) => {
        const exist = sideMeal.find(meal => meal === id);
        if(!exist) {
            setSideMeal([...sideMeal,id]);
        }
    }
    useEffect(() =>{
        console.log(sideMeal);
    },[sideMeal])

    return (
        <div className='food-container'>
           <div className='card-container'>
           {
                foods.map(meal => <FoodCard
                    addFood={addFood} 
                    meal={meal} 
                    key={meal.idMeal}/>)
            }
           </div>
            <Sidebar sideMeal={sideMeal}/>
        </div>
    );
};

export default Body;