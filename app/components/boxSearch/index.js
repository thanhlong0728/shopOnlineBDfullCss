import { useNavigation } from '@react-navigation/native';
import React , {useState} from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';


import styles from './styles'

const BoxSearch = () => {
  const navigation = useNavigation()
    const [search, setSearch] = useState('')

    const changePage = () => {
      if( search ) {
        navigation.navigate('SearchScreen')
      }
    }

    return (
      <View style={styles.container}>
        <SearchBar
            placeholder="Tìm kiếm..."
            onChangeText={(search) =>  setSearch(search)}
            value={search}
            containerStyle={styles.container}
            inputContainerStyle={styles.input}
            lightTheme
            onBlur={changePage}
          />
      </View>
       
    )
}

export default BoxSearch
