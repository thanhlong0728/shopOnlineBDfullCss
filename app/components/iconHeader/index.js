import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import {COLORS} from '../../contains';

const IconHeader = ({name = 'menu', product = false, right = true}) => {
  const navigation = useNavigation();
  let icon = '';

  const openDrawer = () => {
    navigation.openDrawer();
  };
  const openCart = () => {
    navigation.navigate('CartScreen');
  };

  const goBackHome = () => {
    navigation.goBack();
  };

  const goFillter = () => {
    navigation.navigate('FillterScreen');
  };

  const goDelete = () => {
    console.log('goDelete');
  };

  switch (name) {
    case 'menu':
      icon = (
        <TouchableOpacity onPress={openDrawer} style={styles.container}>
          <Ionicons name="menu" size={24} color={COLORS.main} />
        </TouchableOpacity>
      );
      break;
    case 'cart':
      icon = (
        <TouchableOpacity onPress={openCart} style={styles.cart}>
          <Ionicons
            name="cart-outline"
            size={24}
            color={product ? COLORS.white : COLORS.main}
          />
        </TouchableOpacity>
      );
      break;
    case 'back':
      icon = (
        <TouchableOpacity onPress={goBackHome} style={styles.container}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={product ? COLORS.white : COLORS.main}
          />
        </TouchableOpacity>
      );
      break;
    case 'sort':
      icon = (
        <TouchableOpacity onPress={goFillter} style={styles.cart}>
          <Ionicons name="funnel-outline" size={24} color={COLORS.main} />
        </TouchableOpacity>
      );
      break;
    case 'delete':
      icon = (
        <TouchableOpacity onPress={goDelete} style={styles.cart}>
          <Ionicons name="trash-bin-outline" size={24} color={COLORS.main} />
        </TouchableOpacity>
      );
      break;

    default:
      break;
  }

  return icon;
};

export default IconHeader;
