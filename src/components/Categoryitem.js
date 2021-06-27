import React from 'react';
import { View, Text, FlatList,TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {width , height} = Dimensions.get('window')

const Categoryitem = ({data}) => {

    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
        
        <FlatList 
        keyExtractor = {(item, index) => 'key' + index}
        showsVerticalScrollIndicator= {false}
        scrollEnabled
        snapToAlignment = 'center'
        data= {data}
        renderItem = {({item}) =>{
            return ( 
                <View style={{flex: 1, marginBottom: 5}}>    
            <TouchableOpacity onPress={()=>navigation.navigate('listCategory')}>
            <View style={styles.cardView}>
                <Text style={styles.text}>{item.title}</Text>
            </View> 
            </TouchableOpacity>
            </View>
            );
        }}

        />
      
    </View>
    );
};

const styles= StyleSheet.create({


    cardView:{
        flex: 1,
        width: width - 30,
        height: height / 18,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    text:{
        margin: 5,
        fontSize: 20
    }
    
});

export default Categoryitem;