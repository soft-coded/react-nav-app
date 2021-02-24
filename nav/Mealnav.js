import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from "react-navigation-drawer";
import { Entypo, AntDesign } from "@expo/vector-icons"
import Categories from "../screens/Categories"
import Meals from "../screens/Meal"
import Details from "../screens/Details"
import Colors from "../constants/color"
import Favourites from "../screens/Favourites"
import Filters from "../screens/Filters"

const MealsNav=createStackNavigator({
    Categories: Categories,
    Meals: Meals,
    Details: Details
},  {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.background
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            letterSpacing: 2,
            fontSize: 25
        }
    }
})

const FavStack=createStackNavigator({
    FavouritesHome: Favourites,
    Details: Details
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.background
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            letterSpacing: 2,
            fontSize: 25
        }
    }
})

const FavNav=createBottomTabNavigator({
    Home: {
        screen: MealsNav,
        navigationOptions: {
            tabBarLabel: " ",
            tabBarIcon: info=>{
                return <Entypo name="home" size={30} color={info.tintColor}/>
            },
        }
    },
    Favourites: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: " ",
            tabBarIcon: info=>{
                return <AntDesign name="star" size={30} color={info.tintColor}/>
            },
        }
    }
},{
    tabBarOptions:{
        activeTintColor: Colors.primary,
        showLabel: false,
        style: {
            backgroundColor: Colors.background
        }
    }
})

const DrawerNav=createDrawerNavigator({
    FavMeals: FavNav,
    Filters: Filters
})

export default createAppContainer(DrawerNav)