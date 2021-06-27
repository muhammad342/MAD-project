import React from 'react';
import {StyleSheet, View ,  ImageBackground,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import Carosel from '../../src/components/Carosel';
import {Caroseldata} from '../../src/data/CaroselData';
import Post from '../../src/components/Post';
import {PostData} from '../../src/data/PostData';
import { Input, Button } from 'react-native-elements';
 


const HomeScreen = ({navigation}) => {
    return(
    <SafeAreaView style={styles.container} >
    <ScrollView>
    <SafeAreaProvider>
        <View style={styles.header}>
        <ImageBackground source={require('../../assets/pexels-photo-1371360.jpeg')} style={styles.imgBackground}>
            <LinearGradient
              colors={["#c9e5ef", "#1fa2d4"]}
              start={[0.1, 0.1]}
              style={styles.linearGradient}
            > 
                <View style={styles.header_view_menu}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} >
                <AntDesign name="menuunfold" size={26} color="black" />
                </TouchableOpacity>
                </View>
            <View style={styles.header_view_input}>
            <Input
                placeholder='Search here'
                autoCapitalize="none"
                containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50 }}
                inputContainerStyle={{borderBottomWidth: 0}}
                underlineColor="transparent"
                rightIcon={
                    <AntDesign name="search1" size={25} />
                }
                />
            
            </View>
            </LinearGradient>
        </ImageBackground>    
        </View>
        <View style={{height: 30}}></View>
        <Carosel data={Caroseldata}  />
        <View style={{height: 10}}></View>
        <Post data={PostData}  />
        <View style={{flex: 1}}>
            <Button title='View All Listing'
            containerStyle={{
                backgroundColor: 'white',
                width: 380,
                borderWidth: 1,
                borderColor: 'gray',
                margin: 10

            }}
            buttonStyle={{
                backgroundColor: 'white',
                margin: 10
            }}
            titleStyle={{
                color: 'black'
            }}
            iconRight
            icon={
                <AntDesign
                  name="arrowright"
                  size={20}
                  color="black"
                  style={{marginLeft: 15}}
                />
              }
            onPress={()=> navigation.navigate('Select Category')}
            />
        </View>

    </SafeAreaProvider>
    </ScrollView>
    </SafeAreaView>
    );
    
}

HomeScreen.navigationOptions = {
    headerShown: false
  };

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        height:230
    }
    ,
    imgBackground:{
        width: '100%',
        height: '100%'
    },
    header_view_input:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        position: 'absolute',
        top: 175,
        width: 350,
        position: 'absolute'
    },
    header_view_menu:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        left: -180
    },
    input: {
        flex: 1,
        padding: 8.3,
        backgroundColor: 'white',
        fontSize: 20,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopWidth: 0.6,
        borderBottomWidth: 0.6,
        borderLeftWidth: 0.6,
        color: 'black'
        

    },
    searchicon:{
        backgroundColor: 'white',
        padding: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 0.6,
        borderBottomWidth: 0.6,
        borderRightWidth: 0.6,
    }, 
    linearGradient: {
        width: '100%',
        height: '100%',
        opacity: 0.65,
        justifyContent: 'center',
        alignItems: 'center'
    
      }

});


export default HomeScreen;