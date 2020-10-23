import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile157022Navigator from '../features/UserProfile157022/navigator';
import ArticleList157000Navigator from '../features/ArticleList157000/navigator';
import Maps156987Navigator from '../features/Maps156987/navigator';
import ArticleList156982Navigator from '../features/ArticleList156982/navigator';
import Maps156969Navigator from '../features/Maps156969/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile157022: { screen: UserProfile157022Navigator },
ArticleList157000: { screen: ArticleList157000Navigator },
Maps156987: { screen: Maps156987Navigator },
ArticleList156982: { screen: ArticleList156982Navigator },
Maps156969: { screen: Maps156969Navigator },

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
