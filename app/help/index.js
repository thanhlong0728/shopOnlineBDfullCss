
import { Platform } from "react-native";


export const FormatPrice = (yourNumber) => {
    yourNumber = yourNumber
    if (Platform.OS === 'ios'){
        return yourNumber.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
     }else{
         return yourNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' đ'
     }
}