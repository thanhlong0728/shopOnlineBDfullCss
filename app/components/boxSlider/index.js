import React , {useState} from 'react'
import { View ,Image } from 'react-native'

import styles from './styles'
import Carousel , { Pagination } from 'react-native-snap-carousel';

const carouselItems = [
  {
      img : require('../../assets/images/slider/1.jpg')
  },
  {
      img : require('../../assets/images/slider/1.jpg')
  },
  {
      img : require('../../assets/images/slider/1.jpg')
  },
]

const BoxSlider = () => {
    const [entries, setEntries] = useState(carouselItems.length)
    const [activeSlide, setActiveSlide] = useState(0)

    const renderItems = (item) => {
      return (
        <View style={styles.slider}>
            <Image style={styles.img} source={item.item.img} />
        </View>
      )
  }
  const pagination  = () => {
    return (
        <Pagination
          dotsLength={entries}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagiContainer}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
  }

    return (
       <View style={styles.container}>
            <Carousel
              data={carouselItems}
              renderItem={renderItems}
              sliderWidth={350}
              itemWidth={350}
              onSnapToItem={(index) => setActiveSlide(index) }
            />
            <View style={styles.pagination}>
              { pagination() }
            </View>
       </View>
    )
}

export default BoxSlider
