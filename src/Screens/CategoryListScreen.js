import React, {useState} from 'react';
import { Text } from 'react-native';
import {View, StyleSheet} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import Fav from '../../src/components/Fav';
import {PostData} from '../../src/data/PostData';
import { FontAwesome } from '@expo/vector-icons';

const CategoryListScreen = ({navigation}) => {

    const [search, setSearch] = useState('');

    return (
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

                <Text style={{fontSize: 25, margin: 15, color: 'white'}}>All Categories</Text>
                
            </View>
            
            
               
            <Fav data={PostData}/>

            <Button title='' icon={
                <FontAwesome name="plus" size={20} color='white' />
            } 
            containerStyle={{
                width: 60,
                height: 60,
                borderRadius: 60,
                backgroundColor: 'transparent',
                position:'absolute',
                left: 320,
                top: 640
            }}
            buttonStyle={{
                width: 60,
                height: 60,
                borderRadius: 60,
                
            }}
            onPress={()=>navigation.navigate('Add new listing')}
           
            />
           
            
        </View>
    );
};

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

export default CategoryListScreen;