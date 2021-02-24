import React from 'react'
import MealList from "../components/meallist"
import data from "../data/meals" 
import RenderMeal from "../components/mealcomp"

function Favourites({navigation}) {
    function renderItem({item}){
        return <RenderMeal 
            item={item} 
            onPress={()=>navigation.navigate("Details",{id: item.id})}
        />  
    }
    const favMeals=data.filter(meal=>meal.id==="m1" || meal.id==="m2")
    return <MealList data={favMeals} renderItem={renderItem} />
}

export default Favourites
