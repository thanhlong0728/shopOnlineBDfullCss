import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ButtonFillter} from '../../components';
import RangeSlider from 'react-native-range-slider';

import styles from './styles';

const FillterScreen = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.fill}>
          <Text style={styles.fillTitle}>Lọc theo sản phẩm</Text>
          <View style={styles.fillProduct}>
            <View style={styles.fillProductCol}>
              <ButtonFillter title={'Mới nhất'} />
              <ButtonFillter title={'Giá giảm'} />
              <ButtonFillter title={'Giá tăng'} />
            </View>
            <View style={styles.fillProductCol}>
              <ButtonFillter title={'Cũ nhất'} />
              <ButtonFillter title={'Đang giảm giá'} />
            </View>
          </View>
        </View>
        <View style={styles.categoryPrice}>
          <Text style={styles.fillTitle}>Lọc theo giá</Text>
          <View>
            <RangeSlider
              minValue={0}
              maxValue={125}
              selectedMinimum={value => setFromValue(value)}
              selectedMaximum={value => setToValue(value)}
            />
            <View style={styles.viewPrice}>
              <Text style={styles.price}>Giá từ : {fromValue}</Text>
              <Text style={styles.price}>Giá đến : {toValue}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.apply}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FillterScreen;
