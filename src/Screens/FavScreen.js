import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Fav from '../../src/components/Fav';
import {PostData} from '../../src/data/PostData';

const FavScreen = () =>{

    return(
        <View style={{flex: 1, marginTop: 75}}>
            <Fav data={PostData}  />
        </View>
    );

}

const styles = StyleSheet.create({});

export default FavScreen;
