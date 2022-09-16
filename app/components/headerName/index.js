import React from 'react'
import { View, Text } from 'react-native'
import IconHeader from '../iconHeader'
import BoxSearch from '../boxSearch'

import styles from './styles'

const HeaderNameScreen = ({product = false}) => {

    return (
      <View style={styles.container}>
          <View style={styles.top}>
            <IconHeader name={'back'}/>
            <Text numberOfLines={1} style={styles.title}> Danh mục Iphone</Text>
            <IconHeader name={'sort'}/>
          </View>
          <View style={styles.bottom}>
            <BoxSearch />
          </View>
        </View>
    )
}

export default HeaderNameScreen
