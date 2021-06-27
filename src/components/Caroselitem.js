import React from 'react'
import {View, StyleSheet, Image, Dimensions, Text } from 'react-native'

const {width , height} = Dimensions.get('window')

const Caroselitem = ({item}) =>{

    return(
        <View>
        <View style={styles.cardView}>
            
            <Image style={styles.image} source={item.url} />
            
        </View>
        <Text style={styles.text}>{item.title}</Text>
        </View>
    );

}
 
const styles = StyleSheet.create({

    cardView:{
        flex: 1,
        width: width - 300,
        height: height / 9,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    image:{
        width: width - 300,
        height: height / 9,
        borderRadius: 10,
    },
    text:{
        margin: 5,
        fontSize: 15
    }
})

export default Caroselitem;