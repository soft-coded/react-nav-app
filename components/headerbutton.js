import React from 'react'
import {AntDesign} from "@expo/vector-icons"
import {HeaderButton} from "react-navigation-header-buttons"

function CustHeaderButton(props) {
    return (
        <HeaderButton {...props} IconComponent={AntDesign} iconSize={23} color="red" />
    )
}

export default CustHeaderButton
