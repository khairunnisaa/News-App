import { createStackNavigator } from 'react-navigation';
import homepage from '../view/homepage';
import listNews from '../view/listNews';
import contentNews from '../view/contentNews';
export default AppNavigation = createStackNavigator({
    homepage: {
        getScreen: () => homepage
    },
    ListNews: {
        getScreen: () => listNews
    },
    ContentNews: {
        getScreen: () => contentNews,
        navigationOptions: {
            title: 'Content News'
        }
    }
})
