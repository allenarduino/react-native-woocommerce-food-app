/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { FoodContext } from './src/contexts/FoodContextProvider';

const Index=()=>{
    return(
        <FoodContext>
        <App/>
        </FoodContext>
    )
}

export default Index;

AppRegistry.registerComponent(appName, () => App
);
