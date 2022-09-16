import React , { useState } from 'react'
import { View , Text  } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import styles from './styles'
import { InputStyle } from '../../components'

const InfoShipScreen = () => {
    const [nickName, setNickName] = useState('')

    const goScreen = () => {
        console.log('1');
    }

    return (
        <KeyboardAwareScrollView
            enableOnAndroid={true}
            style={styles.container}
        >
            <View style={styles.formInput}>
                <InputStyle name={'Họ tên'} value={nickName} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Email'} value={nickName} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Số điện thoại'} value={nickName} onChange={(value) => setNickName(value)} />
            </View>
            <View style={styles.formInput}>
                <InputStyle name={'Địa chỉ'} value={nickName} onChange={(value) => setNickName(value) } />
            </View>
        </KeyboardAwareScrollView>
)
}

export default InfoShipScreen
