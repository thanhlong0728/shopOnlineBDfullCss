import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container : {
    width : '50%',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10,
    paddingHorizontal : 5,
    height : 250,
    
  },
  product : {
    backgroundColor : COLORS.second,
    width : '100%',
    height : '100%',
    borderRadius : 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding : 10
  },
  boxImg : {
    width : '100%',
    height : '65%',
    borderRadius : 10
  },
  imgItem : {
    width : '100%',
    height : '100%',
    borderRadius : 10
  },
  titleCategory : {
    height : '35%',
    justifyContent : 'space-evenly',
    alignItems : 'flex-start',
    marginTop : 5
  },
  iconLike : {
    position : 'absolute',
    width : 40,
    height : 40,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#FFFFFF'
  },
  iconShoping : {
    position : 'absolute',
    width : 40,
    height : 40,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#FFFFFF',
    bottom : 0,
    right : 0
  },
  name : {
    fontSize : 16,
    fontWeight : 'bold'
  },
  oldPrice : {
    textDecorationLine: 'line-through',
    color : '#8B8080'
  },
  price : {
    color : COLORS.red
  },
  sale : {
    position : 'absolute',
    top : 0,
    right : 0,
    width : 45,
    height : 55,
    alignItems : 'center'
  },
  saleImg : {
    width : '100%',
    height  : '100%',
    position : 'absolute'
  },
  salePr : {
    fontSize : 12,
    color : COLORS.red,
    marginTop : 2
  },
  saleOf : {
    fontSize : 8,
    color : COLORS.red,
    marginTop : 2
  }
  
})

export default styles;