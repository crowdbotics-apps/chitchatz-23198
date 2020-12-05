import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings182167Navigator from '../features/Settings182167/navigator';
import Tutorial2182161Navigator from '../features/Tutorial2182161/navigator';
import Dashboard23182160Navigator from '../features/Dashboard23182160/navigator';
import Feed5182158Navigator from '../features/Feed5182158/navigator';
import Messaging6182157Navigator from '../features/Messaging6182157/navigator';
import Settings7182156Navigator from '../features/Settings7182156/navigator';
import UserProfile8182155Navigator from '../features/UserProfile8182155/navigator';
import NotificationList10182153Navigator from '../features/NotificationList10182153/navigator';
import Camera11182152Navigator from '../features/Camera11182152/navigator';
import ArticleList12182151Navigator from '../features/ArticleList12182151/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings182167: { screen: Settings182167Navigator },
Tutorial2182161: { screen: Tutorial2182161Navigator },
Dashboard23182160: { screen: Dashboard23182160Navigator },
Feed5182158: { screen: Feed5182158Navigator },
Messaging6182157: { screen: Messaging6182157Navigator },
Settings7182156: { screen: Settings7182156Navigator },
UserProfile8182155: { screen: UserProfile8182155Navigator },
NotificationList10182153: { screen: NotificationList10182153Navigator },
Camera11182152: { screen: Camera11182152Navigator },
ArticleList12182151: { screen: ArticleList12182151Navigator },

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
