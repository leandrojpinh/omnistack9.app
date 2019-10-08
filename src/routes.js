import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login';
import Spot from './pages/Spot';
import Book from './pages/Book';

const Routes = createAppContainer(
    createSwitchNavigator({
        Spot, 
        Login,        
        Book
    })
);

export default Routes;