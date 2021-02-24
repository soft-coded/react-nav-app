import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import meals from "../data/meals"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import CustButton from "../components/headerbutton"

function Details({navigation}) {
    const mealId=navigation.getParam("id")
    const displayMeal=meals.find(meal=>meal.id===mealId)
    return (
        <View style={styles.container}>
            <Text>{displayMeal.title}</Text>
        </View>
    )
}

Details.navigationOptions=navData=>{
    const mealId=navData.navigation.getParam("id")
    const displayMeal=meals.find(meal=>meal.id===mealId)
    return {
        headerTitle: displayMeal.title,
        headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={CustButton}>
                <Item
                    title="fav"
                    iconName="staro"
                />
            </HeaderButtons>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Details
