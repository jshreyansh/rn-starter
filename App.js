import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NumberEdit from './src/screens/NumberEdit';
import ListScreen from './src/screens/ListScreen';
import AddColor from './src/screens/addColor';
import AdjustColor from './src/screens/AdjustColor';
import ZomatoLite from './src/screens/ZomatoLite';
import Menu from './src/screens/menu';
import Password from './src/screens/password';
import Box from './src/screens/BoxScreen';
import Search from './src/screens/SearchScreen';
import slot from './src/screens/slotMachine';
import wheel from './src/screens/index'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    NumberEdit:NumberEdit,
    List:ListScreen,
    AddColor:AddColor,
    AdjustColor:AdjustColor,
    Zomato:ZomatoLite,
    Menu:Menu,
    Password:Password,
    Box:Box,
    Search:Search,
    wheel:wheel
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
