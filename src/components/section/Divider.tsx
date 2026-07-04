import { View } from 'react-native'
import React, { memo } from 'react'

const Divider = ({ height = 5 }: { height: number }) => {
    return (
        <View style={{ height }} />

    )
}
export default memo(Divider)