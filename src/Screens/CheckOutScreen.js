import React, {useState} from 'react';
import { View ,StyleSheet,Text, ScrollView,TouchableOpacity} from 'react-native';
import { Button, Divider, Input,CheckBox} from 'react-native-elements';
import {AntDesign } from '@expo/vector-icons';

const CheckOutScreen = ({navigation}) => {

   const [checked, setChecked] = useState(false);
   const [termcondition, setTermcondition] = useState(false);

    return (
        <View style={{flex: 1}}>
        <ScrollView>
        <View style={style.contanier}>
        <Divider style={{ backgroundColor: 'gray', margin: 7, marginTop: 35  }} />
        <Text style={{fontSize: 20, left: 10}}>
            Select Booking Date
        </Text>
        <View>
            <Input 

                placeholder='Type Date ...'
                autoCapitalize="none"
                containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50, shadowColor: '#000',shadowOffset: {width: 0.5, height: 0.5},
                shadowOpacity: 0.5,
                shadowRadius: 3, marginTop: 10, marginLeft: 10, width: 329,  elevation: 5, }}
                inputContainerStyle={{borderBottomWidth: 0}}
                underlineColor="transparent"
                rightIcon={
                    <AntDesign name="calendar" size={25} />
                }
            
            />
            <Input 
                placeholder='Type Time ...'
                autoCapitalize="none"
                containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50 , shadowColor: '#000', shadowOffset: {width: 0.5, height: 0.5},
                shadowOpacity: 0.5,
                shadowRadius: 3, marginTop: 10, marginLeft: 10, width: 329,  elevation: 5,}}
                inputContainerStyle={{borderBottomWidth: 0}}
                underlineColor="transparent"
                rightIcon={
                    <AntDesign name="clockcircle" size={25} />
                }
            
            
            
            />
        </View>
        <Divider style={{ backgroundColor: 'gray', margin: 7, marginTop: 35  }} />
        <Text style={{fontSize: 20, left: 10}}>
            Number of Booking
        </Text>
                <View>
                <Input 
                placeholder='Number of Booking ...'
                autoCapitalize="none"
                containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50 , shadowColor: '#000', shadowOffset: {width: 0.5, height: 0.5},
                shadowOpacity: 0.5,
                shadowRadius: 3, marginTop: 10, marginLeft: 10, width: 329,  elevation: 5,}}
                inputContainerStyle={{borderBottomWidth: 0}}
                underlineColor="transparent"
                rightIcon={
                    <AntDesign name="edit" size={25} />
                }
            
            
            
            />
                </View>
        
                <Divider style={{ backgroundColor: 'gray', margin: 7, marginTop: 35  }} />
                <View style={{flex: 1}}>
                <TouchableOpacity style={{flex: 1,}} >
                    <View style={style.ref_v}>
                        <Text style={{flex: 1, fontSize: 22,height: 20, top: 15, left: 10 }}>Apply Promo/Referrals</Text>

                        <AntDesign name="arrowright" size={25} style={{left: 270, top: -11}} />
                    </View>
                    </TouchableOpacity>
                    </View>
                <Divider style={{ backgroundColor: 'gray', margin: 7, marginTop: 25, top: -340,  }} />

                <View style={{flex: 1, position: 'absolute', top: 480, left: 15}}>
                    <Text style={{ fontSize: 20, flex: 1, position:'absolute'}}>Booking Break Down </Text>
                </View>
                <View style={{flex:1, position:'absolute', top: 500}}>
                    <Text style={{left: 250, top: -18, fontSize: 20}}><AntDesign name="down" size={20}  /> $6000</Text>
                </View>

                <View style={{flex: 1, position: "absolute", top: 520, margin: 20}}>
                    <Text style={{fontSize: 20}}>Select Payment Method</Text>

                    <CheckBox
                        center
                        title="Pay by Card"
                        checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        containerStyle={{
                            backgroundColor: 'transparent'
                        }}
                        textStyle={{
                            fontSize: 25
                        }}
                        />
                </View>

                <CheckBox
                        center
                        title="I have read and I accept the Terms and conditions"
                        
                        checked={termcondition}
                        onPress={() => setTermcondition(!termcondition)}
                        containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0, 
                            position:'absolute',
                            top: 620
                        }}
                        textStyle={{
                            fontSize: 18
                        }}
                        />
        </View>

        
        </ScrollView>
        <View style={style.b_view}>
        <Text style={{fontSize: 25, marginLeft:20, margin: 3}}>$6000.0</Text>
        <Button title="Reserve Now"
        buttonStyle={{
            height: 50,
            width: '90%',
            marginLeft: 20,
            borderRadius: 10
        }}
        onPress={()=> navigation.navigate('Thank You')}
        />
    </View>
    </View>
        
    );
}

const style = StyleSheet.create({

    contanier:{
        flex: 1,
        width: 350,
        height:  700,
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        marginTop: 90,
        
    },
    ref_v:{
        position:'absolute',
        flex:1, 
        width: 309,
        height: 50,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    b_view:{
        justifyContent: 'flex-end',  
    },
});

export default CheckOutScreen;