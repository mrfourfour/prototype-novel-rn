import React from 'react'
import {
    Switch
} from 'react-native'
import useAdult from '../../hooks/Adult'

function AdultSwitch() {
    const { adult, toggle } = useAdult()
    const toggleSwitch = () => toggle()
    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={adult.toggle ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={adult.toggle}
        />
    )
}

export default AdultSwitch;