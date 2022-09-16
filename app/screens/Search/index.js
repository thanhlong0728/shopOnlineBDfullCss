import React from 'react'
import { View , FlatList } from 'react-native'
import { Product } from '../../components'

import styles from './styles'

const items = [
    {
        name: "name 1 ame 1ame 1ame 1ame 1",
        img : require('../../assets/images/slider/1.jpg'),
        price : 23000000,
        oldPrice : 24000000,
        start : 3,
        title : '6GB/8GB'
    },
    {
        name: "name 2",
        img : require('../../assets/images/slider/1.jpg'),
        price : 23000000,
        oldPrice : 24000000,
        start : 3,
        title : '6GB/8GB'
    },
    {
        name: "name 3",
        img : require('../../assets/images/slider/1.jpg'),
        price : 23000000,
        oldPrice : 24000000,
        start : 3,
        title : '6GB/8GB'
    },
]

const InfoCartScreen = () => {

    const showItems = ({item}) => {
        return (
            <Product data={item} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.aside}>
                <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={items}
                    renderItem={showItems}
                    keyExtractor={(item) => item.name.toString()}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default InfoCartScreen
