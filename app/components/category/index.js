import React from 'react'
import { View, Text , TouchableOpacity, FlatList , Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const items = [
    {
        name: "name 1",
        img : require('../../assets/images/slider/1.jpg')
    },
    {
        name: "name 2",
        img : require('../../assets/images/slider/1.jpg')
    },
    {
        name: "name 3",
        img : require('../../assets/images/slider/1.jpg')
    },
    {
        name: "name 4",
        img : require('../../assets/images/slider/1.jpg')
    },
    {
        name: "name 5",
        img : require('../../assets/images/slider/1.jpg')
    },
    {
        name: "name 6",
        img : require('../../assets/images/slider/1.jpg')
    },
  ]

const Category = () => {
    const navigation = useNavigation()

    const showProduct = (item) => {
        navigation.navigate('CategoryScreen')
    }

    const showItems = ({item}) => {
        return (
            <TouchableOpacity onPress={() => showProduct(item)} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.imgItem} source={item.img} />
                </View>
                <Text style={styles.titleCategory}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Tất cả các danh mục</Text>
            </View>
            <FlatList 
                data={items}
                renderItem={showItems}
                keyExtractor={(item) => item.name.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Category
