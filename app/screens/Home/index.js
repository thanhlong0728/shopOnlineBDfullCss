import React from 'react';
import {View, ScrollView} from 'react-native';

import {BoxSlider, Category, CategorySpecial} from '../../components';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BoxSlider />
        <View style={styles.aside}>
          <Category />
          <CategorySpecial />
          <CategorySpecial />
          <CategorySpecial />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
