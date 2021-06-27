import React,{useState} from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const AddListingScreen = () => {

    const [country, setCountry] = useState('')

    return (
        <View style={{flex: 1, top: 300}}>
            <Picker
                selectedValue={country}
                onValueChange={(itemValue) =>
                    setCountry(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>

                <Text>
                    {  country }
                </Text>
        </View>
    );
};

export default AddListingScreen;