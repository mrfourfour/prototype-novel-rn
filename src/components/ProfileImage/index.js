import React from 'react'
import { TouchableOpacity } from 'react-native'
import CircularImage from '../../atoms/CircularImage'

const ProfileImage = ({ navigation, size }) => {
    const goProfileStack = () => {
        console.log("TODO: handle to navigation profile stack")
    }

    return (
        <TouchableOpacity onPress={goProfileStack} style={{width:size, height: size }} >
            <CircularImage
                size={size}
                uri={'https://pbs.twimg.com/profile_images/1437952725300310017/6RvvhWE0_400x400.jpg'}
            />
        </TouchableOpacity>
    )
}
export default ProfileImage