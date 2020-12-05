import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile8182155Navigator from '../features/UserProfile8182155/navigator';
import NotificationList10182153Navigator from '../features/NotificationList10182153/navigator';
import Camera11182152Navigator from '../features/Camera11182152/navigator';
import ArticleList12182151Navigator from '../features/ArticleList12182151/navigator';
import BlankScreen0182149Navigator from '../features/BlankScreen0182149/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile8182155: { screen: UserProfile8182155Navigator },
NotificationList10182153: { screen: NotificationList10182153Navigator },
Camera11182152: { screen: Camera11182152Navigator },
ArticleList12182151: { screen: ArticleList12182151Navigator },
BlankScreen0182149: { screen: BlankScreen0182149Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
