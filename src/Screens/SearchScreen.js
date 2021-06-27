import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { SearchBar, Input } from 'react-native-elements';
import Fav from '../../src/components/Fav';
import {PostData} from '../../src/data/PostData';
import { FontAwesome } from '@expo/vector-icons';

const SearchScreen = () =>{

    const [search, setSearch] = useState('');

    return(
        <View style={{flex: 1}}>

            <View style={styles.menu} >
                <View>
                    <SearchBar
                        placeholder="Your Search..."
                        inputStyle={{backgroundColor: 'white', color: 'black'}}
                        inputContainerStyle={{backgroundColor: 'white' , borderRadius: 10}}
                        searchIcon={{ size: 24, color: 'black' }}
                        clearIcon={{color: 'black'}}
                        leftIconContainerStyle={{backgroundColor: 'white'}}
                        containerStyle={{backgroundColor: 'transparent', marginTop: 85, borderBottomWidth: 0, borderTopWidth: 0 }}
                        onChangeText={setSearch}
                        value={search}
                    />
                </View>
                <View>
                <Input
                    placeholder='Location Search'
                    leftIconContainerStyle={{marginRight: 20}}
                    autoCapitalize="none"
                    containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50, width: '96%', marginLeft: 10 }}
                    inputContainerStyle={{borderBottomWidth: 0}}
                    leftIcon={
                        
                        <FontAwesome name="map-marker" size={24} color="black" />
                    }
                />
                </View>
            </View>
            <Fav data={PostData}  />
        </View>
    );

}



const styles = StyleSheet.create({

    menu:{
        opacity: 1,
        backgroundColor: '#1fa2d4',
        height: 210
    },
    text1:{
       
        
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        top: 30,
        borderRadius: 10,
        fontSize: 18,
        color: 'black'
    },
    text2:{
        
        
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        top: 30,
        borderRadius: 10,
        fontSize: 18,
        color: 'black'
    }

});

export default SearchScreen;
