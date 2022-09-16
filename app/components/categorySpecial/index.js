import React from 'react'
import { View, Text , TouchableOpacity, FlatList , Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FormatPrice } from '../../help'
import RatingComponent from '../rating'
import styles from './styles'

const items = [
    {
        name: "name 1",
        img : require('../../assets/images/slider/1.jpg'),
        content : '8GB/16GB',
        start : 4,
        price : 23000000
    },
    {
        name: "name 2",
        img : require('../../assets/images/slider/1.jpg'),
        content : '8GB/16GB',
        start : 4,
        price : 23000000
    },
    {
        name: "name 3",
        img : require('../../assets/images/slider/1.jpg'),
        content : '8GB/16GB',
        start : 4,
        price : 23000000
    },
    {
        name: "name 4",
        img : require('../../assets/images/slider/1.jpg'),
        content : '8GB/16GB',
        start : 4,
        price : 23000000
    },
    {
        name: "name 5",
        img : require('../../assets/images/slider/1.jpg'),
        content : '8GB/16GB',
        start : 4,
        price : 23000000
    },
  ]


const CategorySpecial = () => {
    const navigation = useNavigation()

    const goProduct = () => {
        navigation.navigate('ProductScreen')
    }

    const showItems = ({item}) => {
        return (
            <TouchableOpacity onPress={goProduct} style={styles.box}>
                <View style={styles.boxCategory}>
                    <Image style={styles.imgItem} source={item.img} />
                </View>
                <View style={styles.info}>
                    <Text numberOfLines={1} style={[styles.infoName]}>{item.name}</Text>
                    <Text numberOfLines={1}>{item.content}</Text>
                    <Text numberOfLines={1}><RatingComponent /></Text>
                    <Text numberOfLines={1} style={[styles.infoPrice]}>{FormatPrice(item.price)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Danh mục nỗi bật</Text>
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

export default CategorySpecial
