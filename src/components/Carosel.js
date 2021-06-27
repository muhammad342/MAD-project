import React from 'react'
import {View, StyleSheet, FlatList, Text ,TouchableOpacity} from 'react-native'
import Caroselitem from '../../src/components/Caroselitem'

const Carosel = ({navigation,data}) =>{

    if(data && data.length){
        return(
        <View style={{flex: 1}}>
            <View style= {styles.txtview}>
            <Text style = {styles.txts}> Explore our Categories  </Text>
            </View>
            
            <FlatList 
            keyExtractor = {(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment = 'center'
            scrollEventThrottle = {10}
            decelerationRate = {"fast"}
            showsHorizontalScrollIndicator = {false}
            data= {data}
            renderItem = {({item}) =>{
                return (   <Caroselitem item = {item} />  ) 
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
    txtad:{
    }


})

export default Carosel;