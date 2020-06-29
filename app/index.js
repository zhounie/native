/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { useState } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar
} from 'react-native';

import Discover from './components/Discover'

const Home = (props) => {
  return (
    <FlatList
      data={[1,2,1,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,2,3,4,5,6,7,8,9,0]}
      renderItem={
        ({item}) => {
          return <Text>{item}</Text>
        }
      }
    >
    </FlatList>
  )
}

const Tabs = createBottomTabNavigator({
  Home: Home,
  Discover: Discover
})



// const App = (props) => {
//   const [select, setSelect] = useState('home')
//   return (
//     <View style={styles.container}>
//       <TabNavigator>
//         <TabNavigator.Item
//           title="首页"
//           titleStyle={{color:'black'}}
//           selectedTitleStyle={{color:'red'}}
//           selected={select === 'home'}
//           onPress={() => setSelect('home')}
//           renderIcon={()=> <Icon name="home" size={18} color="#666" /> }
//           renderSelectedIcon={()=> <Icon name="home" size={18} color="red" /> }
//         >
//           <Home></Home>
//         </TabNavigator.Item>
//         <TabNavigator.Item
//           title="发现"
//           titleStyle={{color:'black'}}
//           selectedTitleStyle={{color:'red'}}
//           selected={select === 'find'}
//           onPress={() => setSelect('find')}
//           renderIcon={()=> <Icon name="th" size={18} color="#666" /> }
//           renderSelectedIcon={()=> <Icon name="th" size={18} color="red" /> }
//         >
//           <Text>发现</Text>
//         </TabNavigator.Item>
//         <TabNavigator.Item
//           title="我的"
//           titleStyle={{color:'black'}}
//           selectedTitleStyle={{color:'red'}}
//           selected={select === 'mine'}
//           onPress={() => setSelect('mine')}
//           renderIcon={()=> <Icon name="user-circle" size={18} color="#666" /> }
//           renderSelectedIcon={()=> <Icon name="user-circle" size={18} color="red" /> }
//         >
//           <Text>我的</Text>
//         </TabNavigator.Item>
//       </TabNavigator>
//     </View>
//   )
// }

// const Tabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.screen name="Home" component={Home}></Tab.screen>
//       <Tab.screen name="Discover" component={Discover}></Tab.screen>
//     </Tab.Navigator>
//   )
// }

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Discover: {
    screen: Discover
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})



export default createAppContainer(Tabs);