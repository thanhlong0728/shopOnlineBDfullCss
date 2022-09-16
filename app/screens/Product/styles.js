import { StyleSheet } from 'react-native';

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.pink
    },
    product : {
        height : 200,
        width : '100%',
        flexDirection : 'row',
        zIndex : 1
    },
    view : {
        borderTopLeftRadius : 45,
        borderTopRightRadius : 45,
        flex : 1,
        backgroundColor : COLORS.white,
        paddingTop : 50,
        paddingHorizontal : 20
    },
    productImg : {
        width : '50%',
        height : '120%',
    },
    productContent : {
        height : '120%',
        width : '50%',
        justifyContent : 'space-evenly',
        alignItems : 'center',
    },
    img : {
        width : '100%',
        height : '100%',
    },
    name : {
        fontSize : 22,
        fontWeight : 'bold',
        color : COLORS.white
    },
    oldPrice : {
        textDecorationLine : 'line-through',
        color : COLORS.white,
        fontSize : 16
    },
    price : {
        width : 180,
        height : 45,
        backgroundColor : COLORS.main,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 15
    },
    priceText : {
        color : COLORS.white,
        fontSize : 16,
        fontWeight : 'bold'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 18,
        marginBottom : 10
    },
    view_main : {
        marginBottom : 40
    },
    boxProduct : {
        height : 280,
    },
    quantity : {
        flexDirection : 'row',
        width : 140,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    quantity_button : {
        width : 50,
        height : 30,
        backgroundColor : COLORS.main,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center'
    },
    quantity_buttonText : {
        fontSize : 20
    },
    add : {
        width : '100%',
        height : 100,
        position : 'absolute',
        bottom : 0,
        left : 0,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around',
        backgroundColor : '#979797'
      },
      addItem : {
          color : COLORS.white,
          fontSize : 20,
      },
      addBuy : {
        padding : 10,
        backgroundColor : '#B23F56',
        borderRadius : 20,
        justifyContent : 'center',
        alignItems : 'center'
      },
      addBuyText : {
          color : COLORS.white,
          fontSize : 16,
          marginBottom : 10
      },
      addBuyPrice : {
        fontSize : 20,
        color : COLORS.white,
        fontWeight : 'bold'
      }
    

})

export default styles;