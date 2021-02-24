import React from 'react'
import data from "../data/data"
import meals from "../data/meals"
import RenderMeal from "../components/mealcomp"
import MealList from "../components/meallist"

function Meal({navigation}) {
    const catId=navigation.getParam("id")
    const mealsToDisplay=meals.filter(meal=>meal.categoryIds.indexOf(catId)>=0)
    function renderItem({item}){
        return <RenderMeal 
            item={item} 
            onPress={()=>navigation.navigate("Details",{id: item.id})}
        />  
    }
    return <MealList data={mealsToDisplay} renderItem={renderItem} />
}

Meal.navigationOptions=navData=>{
    const id=navData.navigation.getParam("id")
    const currCat=data.find(cat=>cat.id===id)

    return {
        headerTitle: currCat.title
    }
}

export default Meal
