import React  from 'react'
import {DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '../../contains'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';


const DrawerItemComponent = ({name,setActive,active}) => {
    const navigation = useNavigation()

    let icon,label;
    switch (name) {
        case 'Home':
            icon = 'ios-home-outline';
            label = "Trang chủ";
            break;
        case 'Category':
            icon = 'ios-copy-outline';
            label = "Danh mục sản phẩm";
            break;
        case 'Cart':
            icon = 'ios-cart-outline';
            label = "Thông tin đơn hàng";
            break;
        case 'Info':
            icon = 'ios-person-outline';
            label = "Thông tin cá nhân";
            break;
        case 'Login':
            icon = 'ios-log-in-outline';
            label = "Đăng nhập";
            break;
        case 'Logout':
            icon = 'ios-log-out-outline';
            label = "Đăng Xuất";
            break;
        default:
            break;
    }

    return (
        <DrawerItem
            focused={active == name ? true : false}
            activeTintColor={COLORS.primary}
            icon={({color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
            )}
            label={label}
            onPress={() => {
                setActive(name)
                navigation.navigate(name)
            }}
        />
    )
}

export default DrawerItemComponent
