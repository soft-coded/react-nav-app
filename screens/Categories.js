import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import data from "../data/data"
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import CustHeaderButton from "../components/headerbutton"

function renderItem(navigate,{item}){
    return (
        <TouchableOpacity style={{...styles.listItem,backgroundColor: item.color}} onPress={()=>navigate("Meals",{id: item.id})} activeOpacity={0.5}>
            <View>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

function Categories({navigation}) {
    return (
        <FlatList
            data={data}
            numColumns={2}
            renderItem={renderItem.bind(this,navigation.navigate)}
        />
    )
}

Categories.navigationOptions=nav=>{
    return {
        headerTitle: "Menu Categories",
        headerLeft: ()=><HeaderButtons HeaderButtonComponent={CustHeaderButton}>
            <Item
                iconName="home"
                title="menu"
                onPress={()=>nav.navigation.toggleDrawer()}
            />
        </HeaderButtons>
    }
}

const styles=StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        elevation: 10,
        padding: 15
    },
    text: {
        fontFamily: "open-sans-bold"
    }
})

export default Categories
