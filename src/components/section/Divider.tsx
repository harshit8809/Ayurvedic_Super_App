import { View } from 'react-native'
import React, { memo } from 'react'

const Divider = ({ height = 5, backgroundColor }: any) => {
    return (
        <View style={{ height, backgroundColor: backgroundColor }} />
    )
}
export default memo(Divider)