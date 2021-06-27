import React from 'react'
import {View, StyleSheet, FlatList, Text, Dimensions,Image, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native';

const {width , height} = Dimensions.get('window')

const Post = ({data}) =>{

    const navigation = useNavigation();

    

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
            scrollEventThrottle = {16}
            decelerationRate = {"fast"}
            showsHorizontalScrollIndicator = {false}
            data= {data}
            renderItem = {({item}) =>{
                return ( 
                <TouchableOpacity onPress={()=>navigation.navigate('Post')}>
                <View style={styles.cardView}>
            
                    <Image style={styles.image} source={item.url} />
                    <Text style={styles.text}>{item.title}</Text>
                    <View style={styles.agencyprofile}>
                    <Text style={styles.agency}>{item.agency}</Text>
                    <Image style={styles.profile} source={{uri: item.profile}} />
                    </View>
                    <Text style={styles.price}>{item.price}</Text>
                </View> 
                </TouchableOpacity>
                );
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
    cardView:{
        flex: 1,
        width: width - 217,
        height: height / 2.7,
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
        width: width - 217,
        height: height / 5,
        borderRadius: 10,
    },
    text:{
        margin: 5,
        fontSize: 20
    }
    ,
    agency:{
        margin: 5,
        fontSize: 16,
        width: 130,
        color: '#1fa2d4'
    }
    ,
    price:{
        margin: 5,
        fontSize: 20,
        color: '#1fa2d4'
    },
    agencyprofile:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    profile:{
        width: 50,
        height: 50,
        borderRadius: 50
    }
    


})

export default Post;