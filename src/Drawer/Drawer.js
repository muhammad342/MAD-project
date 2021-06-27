import React,{ useState } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import HomeScreen from '../Screens/HomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import {Image, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import FavScreen from '../Screens/FavScreen';
import RefferandEarnScreen from '../Screens/RefferandEarnScreen';
import PostDetail from '../Screens/PostDetail';
import CheckOutScreen from '../Screens/CheckOutScreen';
import ThankScreen from '../Screens/ThankScreen';
import ListCategories from '../Screens/ListCategories';
import CategoryListScreen from '../Screens/CategoryListScreen';
import AddListingScreen from '../Screens/AddListingScreen';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerContent = props =>{

    return(
        
    <DrawerContentScrollView {...props}>

        <View>
            <View style={{flex: 0.4, margin: 20}}>
                <Image source={{
                    uri: "https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg",
                    height: 60,
                    width: 60
                }} style={{borderRadius: 60}} />
                <Text style={{fontSize: 25, margin: 5, color: 'white'}}>
                    Ali Hamza
                </Text>
                <Text style={{fontSize: 15, marginLeft: 12, color: 'white'}}>hamza@gmail.com</Text>
            </View>
        <DrawerItem
          label="Index"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Home")}
          icon={() => <AntDesign name="home" color="white" size={16} />}
        />
        <DrawerItem
          label="Add Listing"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Add new listing")}
          icon={() => <AntDesign name="plus" color="white" size={16} />}
        />
        <DrawerItem
          label="Contact"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Search")}
          icon={() => <AntDesign name="contacts" color="white" size={16} />}
        />
        <DrawerItem
          label="My Listing"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Search")}
          icon={() => <AntDesign name="menufold" color="white" size={16} />}
        />
        <DrawerItem
          label="Favorite Listing"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("My Favorite")}
          icon={() => <AntDesign name="heart" color="white" size={16} />}
        />
        <DrawerItem
          label="Refer and Earn"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Reffer and Earn")}
          icon={() => <AntDesign name="sharealt" color="white" size={16} />}
        />
        <DrawerItem
          label="Setting"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Search")}
          icon={() => <AntDesign name="setting" color="white" size={16} />}
        />
        <DrawerItem
          label="Logout"
          labelStyle={{marginLeft: -16 , color: 'white'}}
          onPress={() => props.navigation.navigate("Search")}
          icon={() => <AntDesign name="left" color="white" size={16} />}
        />
        </View>

      </DrawerContentScrollView>
      );

}

const Screens = ({style}) => {

    return(
        <Animated.View style={[{flex: 1, overflow: 'hidden'}, style]}>
        <Stack.Navigator screenOptions={{
            headerTransparent: true,
            
            
        }}>
            <Stack.Screen name="Home" component={HomeScreen} 
            options={{
              headerTransparent: true,
              headerTitle: null
            }}
            
            />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="My Favorite" component={FavScreen} />
            <Stack.Screen name="Reffer and Earn" component={RefferandEarnScreen} />
            <Stack.Screen name="Post" component={PostDetail} 
            

                options={{
                  headerTitle: null
                }}
            
            />
            <Stack.Screen name="Check Out" component={CheckOutScreen} />
            <Stack.Screen name="Thank You" component={ThankScreen} />
            <Stack.Screen name="Select Category" component={ListCategories} />
            <Stack.Screen name="listCategory" component={CategoryListScreen} 
            
            options={{
              headerTitle: null
            }}
            />

            <Stack.Screen name="Add new listing" component={AddListingScreen} />
        </Stack.Navigator>
        </Animated.View>
    );


}

export default () =>{

    const [progress, setProgress] = useState(new Animated.Value(0));

    const scale = Animated.interpolateNode(progress,{
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    });

    const borderRadius = Animated.interpolateNode(progress,{
        inputRange: [0, 1],
        outputRange: [0, 50]
    })

    const screenStyles = { borderRadius , transform: [{scale}]};

    return(

       <LinearGradient style={{flex: 1}} colors={['#1f3b60', '#3f7ecb']} > 
        <Drawer.Navigator
            drawerType= 'slide' 
            overlayColor='transparent'
            initialRouteName="Home"
            drawerStyle={{width: '65%', backgroundColor:'transparent'}}
            contentContainerStyle={{flex: 1}}
            drawerContentOptions={{
                activeBackgroundColor: 'transparent',
                activeTintColor:'green',
                inactiveTintColor: 'green'

            }}
            sceneContainerStyle={{ backgroundColor: 'transparent'}}
            drawerContent={props =>  {
            setProgress(props.progress);
            return <DrawerContent {...props} />
        }}
        >
        <Drawer.Screen name="Screens">
            {props => <Screens {...props} style={screenStyles} />}
        </Drawer.Screen>
        </Drawer.Navigator>
        </LinearGradient>


    );



};