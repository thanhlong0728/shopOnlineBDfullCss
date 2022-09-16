import { useNavigation } from '@react-navigation/native';
import React , { useState } from 'react'
import { View, Text , TouchableOpacity , Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles'
import IconHeart from '../iconHeart'

import { FormatPrice } from '../../help'
import {IMAGES} from '../../contains'

const Product = ({data,sale = true}) => {
    const navigation = useNavigation()
    const [heart, setHeart] = useState(false)

    const showProduct = () => {
        navigation.navigate('ProductScreen')
    }

    const onHeart = () => {
        setHeart(!heart)
    }

    return (
        <TouchableOpacity onPress={showProduct} style={styles.container}>
            <View style={styles.product}>
                <View style={styles.boxImg}>
                    <Image style={styles.imgItem} source={data.img} /> 
                </View>
                <View style={styles.titleCategory}>
                    <Text numberOfLines={1} style={styles.name} >{data.name}</Text>
                    <Text numberOfLines={1} style={styles.title}>{data.title}</Text>
                    {
                        sale && ( <Text style={styles.oldPrice} >{FormatPrice(data.oldPrice)}</Text>) 
                    }
                    <Text style={styles.price}>{FormatPrice(data.price)}</Text>
                </View>
                <View style={styles.iconLike}>
                    <TouchableOpacity onPress={onHeart}>
                        <IconHeart heart={heart} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.iconShoping}>
                    <Ionicons name={'ios-cart'} size={24} color={'red'} />
                </TouchableOpacity>
                {
                    sale && (
                        <View style={styles.sale} >
                            <Image  style={styles.saleImg} source={IMAGES.sale} />
                            <Text style={styles.salePr}>10 %</Text>
                            <Text style={styles.saleOf}>GIẢM GIÁ</Text>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default Product
