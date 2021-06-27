import React from 'react'
import {View, StyleSheet,FlatList, Text} from 'react-native'
import Favitem from '../../src/components/Favitem'



const Fav = ({data}) =>{

    const numColumns = 2

    if(data && data.length){
        return(
        <View style={{flex: 1}}>
            
            
            <FlatList 
            keyExtractor = {(item, index) => 'key' + index}
            vertical
            scrollEnabled
            numColumns = {numColumns}
            showsHorizontalScrollIndicator = {false}
            data= {data}
            renderItem = {({item}) =>{
                return ( <Favitem item = {item} /> ) 
            }}
 
            />
           
        </View>
        )
    }

}

const styles = StyleSheet.create({
    txtview:{
        
    },
    txts:{
        marginLeft: 5,
        fontSize: 25,
    },
    


})

export default Fav;