import React from 'react'
import {View, FlatList, StyleSheet} from "react-native"

function MealList({data, renderItem}) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                style={{width:"100%"}}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    }
})

export default MealList
