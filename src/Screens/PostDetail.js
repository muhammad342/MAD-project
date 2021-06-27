import React from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button, Divider} from 'react-native-elements';
import Carosel from '../../src/components/Carosel';
import {Caroseldata} from '../../src/data/CaroselData';


const PostDetail = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1, height:'100%'}}>
            
            <View style={{flex:1}}>
                <View style={{height: 450}}>
                <Image 

                    source={{
                        uri: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12AED/production/_108552567_gettyimages-493079092.jpg',
                        width: '100%',
                        height: '60%'

                    }} 

                />
                </View>
                    
                    <View style={{position:'absolute', marginTop: '70%'}}>
                     <Carosel data={Caroseldata}  />     
                     </View>
                    <Text style={{fontSize: 35, color:'black', margin: 10}}>Skay Diving and enjoy</Text>

                    <Divider style={{ backgroundColor: 'gray', margin: 7,  }} />

                    <View style={styles.b_but}>

                            <Text style={{fontSize: 25, textAlign:'center'}}>
                                Description and Features
                            </Text>

                            <Text style={{fontSize: 15, margin: 5}}>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Text style={{fontSize: 15, margin: 5}}>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Text>
                            <Text style={{fontSize: 15, margin: 5}}>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                            <Text style={{fontSize: 15, margin: 5}}>
                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Text>

                    </View>
                    <Divider style={{ backgroundColor: 'gray', margin: 7,  }} />
                    <View>
                        <Text style={{fontSize: 20, margin:15}}>
                            Location
                        </Text>

                        <Text style={{fontSize: 18, margin:5,marginLeft: 30, color:'#71b6f9'}}>
                            Distance from your Location 131375 Km
                        </Text>
                        <View style={{height: 450, margin: 30,}}>
                        <Image 
                        
                        source={{
                            uri: 'https://developers.google.com/maps/images/landing/marker_cluster.jpg',
                            width: '100%',
                            height: '60%'
                        }}

                        />
                        </View>
                        <View style={styles.card}>
                            <Image source={{
                                uri: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                                height: 70,
                                width: 70
                            }} style={{borderRadius: 60, left: 20, top: 40}}
                            />
                            <View style={{flex: 1, left: 120, top: -30}}>
                                <Text style={{fontSize: 18}}>Listed By</Text>
                                <Text style={{fontSize: 15}}>Ali Hamza</Text>
                                <Text style={{fontSize: 15}}>hamza01safdar@gmail.com</Text>
                                <Text style={{fontSize: 15, color:'#71b6f9'}}>Contact</Text>
                            </View>
                        </View>
                    </View>


            </View>  
            </ScrollView>
                   
        

        <View style={styles.b_view}>
                <Text style={{fontSize: 25, marginLeft:20, margin: 3}}>$6000.0</Text>
                <Button title="Book Now"
                buttonStyle={{
                    height: 50,
                    width: '90%',
                    marginLeft: 20,
                    borderRadius: 10
                }}
                onPress={()=> navigation.navigate('Check Out')}
                />
            </View>
    </SafeAreaView>
    );
};

const styles= StyleSheet.create({

    container:{
        flex: 1,
    },
    b_view:{
        justifyContent: 'flex-end',  
    },
    b_but:{
        flex: 1,
        
        alignItems:'center',
        alignContent:'center',
        marginLeft: 10,
       
    },
    card:{
        flex: 1,
        width: 350,
        height:  150,
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginTop: '-45%'

    }


});

export default PostDetail;