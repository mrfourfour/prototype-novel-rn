import React from 'react'
import { Image } from 'react-native'

function CircularImage({ size, uri, style }) {
    return <Image
        style={{
            width: size,
            height: size,
            borderRadius: size,
            ...style
        }}
        source={{ uri }}
    />
}

export default CircularImage