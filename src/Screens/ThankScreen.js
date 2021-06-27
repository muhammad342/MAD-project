import React from 'react';
import { View, Text,Image} from 'react-native';


const ThankScreen = () => {
    return (
        <View style={{flex: 1, marginTop: 90}}>
            <Image source={{
                uri: 'https://image.freepik.com/free-vector/congratulations-typography-handwritten-lettering-greeting-card-banner_7081-766.jpg',
                width: '100%',
                height: '50%'
            
            }} />
            <Text style={{margin: 10, fontSize: 40, marginLeft: 130}}>Thank You</Text>
            
        </View>
    );
};

export default ThankScreen;