import React from 'react'
import {View ,Text, StyleSheet, TouchableOpacity, ImageBackground} from "react-native"
import Colors from "../constants/color"

function RenderMeal({item, onPress}) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.6}
            onPress={onPress}
        >
            <ImageBackground source={{uri: item.imageUrl}} style={styles.image} resizeMode="cover">
                <View style={styles.inner}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header} numberOfLines={1}>{item.title}</Text>
                    </View>
                    <View style={styles.itemSpecifics}>
                        <Text style={styles.text}>{item.duration}m</Text>
                        <Text style={styles.text}>{item.complexity.toUpperCase()}</Text>
                        <Text style={styles.text}>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        height: 270,
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    inner: {
        height: "100%",
        justifyContent: "space-between"
    },
    headerContainer: {
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    header: {
        fontSize: 22,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontFamily: "open-sans-bold",
        color: Colors.primary
    },
    text: {
        fontFamily: "open-sans-bold",
        color: Colors.secondary
    },
    itemSpecifics: {
        flexDirection: "row",
        alignItems: "flex-end",
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "space-between",
    }
})

export default RenderMeal
