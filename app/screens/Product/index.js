import React from 'react'
import { View , Image , Text , ScrollView , TouchableOpacity, FlatList } from 'react-native'
import { FormatPrice } from '../../help'
import { RatingComponent , ProductHorizital , Comment} from '../../components'

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


const ProductScreen = () => {

    const showItems = ({item}) => {
        return (
            <ProductHorizital data={item} />
        )
    }

    return (
        <>
        <ScrollView style={styles.container}>
            <View style={styles.product}>
                <View style={styles.productImg}>
                    <Image style={styles.img} source={require('../../assets/images/ip.png')} />
                </View>
                <View style={styles.productContent}>
                    <View><Text numberOfLines={2} style={styles.name}>Iphone 13 Pro</Text></View>
                    <View><RatingComponent product={true} /></View>
                    <View><Text style={styles.oldPrice}>{FormatPrice(123000000)}</Text></View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{FormatPrice(122000000)}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.view}>
                <View style={styles.view_main}>
                    <Text style={styles.title}> Thông tin sản phẩm </Text>
                    <Text style={styles.title_source}> Phụ Kiện Điện Thoại và Máy Tính Bảng / Phụ kiện máy tính và Laptop / Thiết Bị Âm Thanh và Phụ Kiện / Thiết Bị Thông Minh và Linh Kiện Điện Tử / Thiết Bị Đeo Thông Minh và Phụ Kiện / Thiết Bị Chơi Game và Phụ Kiện </Text>
                </View>
                <View style={styles.view_main}>
                    <Text style={styles.title}> Số lượng </Text>
                    <View style={styles.quantity}>
                        <TouchableOpacity style={styles.quantity_button}><Text style={styles.quantity_buttonText}>-</Text></TouchableOpacity>
                        <Text style={styles.quantity_buttonText}>1</Text>
                        <TouchableOpacity style={styles.quantity_button}><Text style={styles.quantity_buttonText}>+</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view_main}>
                    <Text style={styles.title}> Sản phẩm liên quan </Text>
                    <View style={styles.boxProduct}>
                        <FlatList 
                            showsVerticalScrollIndicator={false}
                            data={items}
                            renderItem={showItems}
                            keyExtractor={(item) => item.name.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.view_main}>
                    <Comment />
                </View>
            </View>
        </ScrollView>
        <View style={styles.add}>
            <Text style={styles.addItem}>1 item</Text>
            <TouchableOpacity style={styles.addBuy}>
                <Text style={styles.addBuyText}>Thêm vào giỏ hàng</Text>
                <Text style={styles.addBuyPrice}>{FormatPrice(122000000)}</Text>
            </TouchableOpacity>
        </View>
        </>
    )
    
}

export default ProductScreen
