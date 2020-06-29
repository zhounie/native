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
  StatusBar,
  Button
} from 'react-native';

import Discover from './components/Discover'
import Mine from './components/Mine'
import Detail from './components/Detail'

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      headerTitle: '发现'
  })
  constructor(props) {
    super(props)
  }
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Home</Text>
        <Button
          title={'goto 发现'}
          onPress={() =>{
            navigation.navigate('Discover');
          }}
        ></Button>
        <Button
          title={'goto Detail'}
          onPress={() =>{
            navigation.navigate('Detail');
          }}
        ></Button>
      </View>
    )
  }
}
const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor, focused}) => <Icon name="home" size={18} color={tintColor} />
    }
  },
  Discover: {
    screen: Discover,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({tintColor, focused}) => <Icon name="th" size={18} color={tintColor} />
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => <Icon name="user-circle" size={18} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#FF4500'
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Detail: { screen: Detail }
}, {
  headerMode: 'screen',
  mode: 'modal'
})
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})



export default createAppContainer(AppNavigator);