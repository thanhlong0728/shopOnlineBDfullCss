import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';
import {COLORS} from '../../contains';

const InfoList = ({name, onPress}) => {
  let icon, text;
  switch (name) {
    case 'info':
      icon = <Ionicons name="airplane-outline" size={24} color={COLORS.main} />;
      text = 'Quản lí tài khoản';
      break;
    case 'cart':
      icon = <Ionicons name="aperture-outline" size={24} color={COLORS.main} />;
      text = 'Thông tin đơn hàng';
      break;
    case 'ship':
      icon = (
        <Ionicons name="bar-chart-outline" size={24} color={COLORS.main} />
      );
      text = 'Thông tin giao hàng';
      break;

    default:
      break;
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.area}>
      <View style={styles.areaText}>
        {icon}
        <Text style={styles.areaTextName}>{text}</Text>
      </View>
      <AntDesign name="right" size={24} color={COLORS.main} />
    </TouchableOpacity>
  );
};

export default InfoList;
