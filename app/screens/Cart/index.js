import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View , Text ,  TouchableOpacity } from 'react-native'

import {  ProductList  } from '../../components'
import styles from './styles'

const CartScreen = () => {
    const navigation = useNavigation()
    const openBuy = () => {
        navigation.navigate('BuyScreen')
    }

    return (
        <>
            <ScrollView style={styles.container}>
                <ProductList cart/>
            </ScrollView>
            <View style={styles.apply}>
                <TouchableOpacity onPress={openBuy} style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CartScreen
