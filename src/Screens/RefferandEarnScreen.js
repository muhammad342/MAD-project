import React from 'react';
import { StyleSheet, View ,Text, Image} from 'react-native';
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const RefferandEarnScreen = () => {
    return (
        <View style={{flex: 1, marginTop: 85}}>
            <Image source={{
                uri: 'https://image.freepik.com/free-vector/refer-friend-concept-affiliate-marketing-earn-money_18622-633.jpg',
                width: '100%',
                height: '50%'
            
            }} />
            <Text style={{margin: 10, fontSize: 20, marginLeft: 100}}>Reafer and Earn up to $100</Text>
            <Input
                value='2fc56k'
                autoCapitalize="none"
                containerStyle={{backgroundColor: '#fefefd', borderRadius: 10, height: 50, width: '85%', marginLeft: 25  }}
                inputContainerStyle={{borderBottomWidth: 0}}
                underlineColor="transparent"
                rightIcon={
                    <AntDesign name="edit" size={25} />
                }
                />
        </View>
    );
};

export default RefferandEarnScreen;