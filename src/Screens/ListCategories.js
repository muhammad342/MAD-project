import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import Categoryitem from '../../src/components/Categoryitem';
import {Category} from '../../src/data/Category';





const ListCategories = ({navigation}) => {

    return (
        <View style={{flex: 1, margin: 10, marginTop: 80}}>
            <Categoryitem data={Category}  />
        </View>
    );
};

export default ListCategories;