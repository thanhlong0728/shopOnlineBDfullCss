import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container : {
    marginBottom : 30
  },
  containerBox : {
    marginTop : 15,
    flexDirection : 'row',
    flexWrap: 'wrap'
  },
  box : {
      marginRight : 20,
      alignItems : 'center'
  },
  title : {
    marginBottom : 25
  },
  boxCategory : {
      width : 80,
      height : 80,
      borderRadius : 15,
      alignItems : 'center',
      justifyContent : 'center',
  },
  titleCategory : {
      alignItems : 'center',
      marginTop : 6,
  },
  titleText : {
    fontSize : 16,
    fontWeight : 'bold'
  },
  imgItem : {
    width : '100%',
    height : '100%',
    borderRadius : 15,
  }
  
})

export default styles;