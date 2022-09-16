import { useNavigation } from '@react-navigation/native';
import React , { useState } from 'react'
import { View, Text , TouchableOpacity , Image } from 'react-native'
import styles from './styles'
import IconHeart from '../iconHeart'
import { FormatPrice } from '../../help'



const ProductList = ({cart}) => {

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
            <View style={styles.imgBox}>
                <View style={styles.iconLike}>
                    <TouchableOpacity onPress={onHeart}>
                        <IconHeart heart={heart} />
                    </TouchableOpacity>
                </View>
                <Image style={styles.img} source={require('../../assets/images/ip.png')} />
            </View>
           
            <View style={styles.content}>
                <View style={styles.contentInfo}>
                    <Text numberOfLines={1} style={styles.contentName}>Điện thoại ip13</Text>
                    <Text numberOfLines={1}>Điện thoại ip13</Text>
                    <Text numberOfLines={1} style={styles.contentPrice}>{FormatPrice(4000000)}</Text>
                </View>
                {
                    cart && (
                        <View style={styles.contentMore}>
                            <View style={styles.quantity}>
                                <TouchableOpacity style={styles.quantity_button}><Text style={styles.quantity_buttonText}>-</Text></TouchableOpacity>
                                <Text style={styles.quantity_buttonText}>1</Text>
                                <TouchableOpacity style={styles.quantity_button}><Text style={styles.quantity_buttonText}>+</Text></TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </View>
           
        </TouchableOpacity>
    )
}

export default ProductList
