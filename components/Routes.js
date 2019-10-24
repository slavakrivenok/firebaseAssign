import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import{createAppContainer} from 'react-navigation';
import Jokes from './Jokes';
import Post from './Post';


const NavStack =createStackNavigator({
    Jokes: {
        screen: Jokes
    }
})

const BottomTab = createBottomTabNavigator({
    Jokes:{
        screen: NavStack
    },
    Create:{
        screen: Post
    }
})

export default Routes =createAppContainer(BottomTab)