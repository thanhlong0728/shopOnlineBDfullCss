import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const ButtonFillter = ({title}) => {

    return (
      <TouchableOpacity style={[styles.button]}>
          <Text >{title}</Text>
      </TouchableOpacity>
    )
}

export default ButtonFillter
