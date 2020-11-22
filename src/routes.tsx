import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './views/HomePage';
import QuestionsPage from './views/QuestionsPage';
import ProfileResult from './views/ProfileResult';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="HomePage" component={HomePage} />
                <Screen name="QuestionsPage" component={QuestionsPage}/>
                <Screen name="ProfileResult" component={ProfileResult} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;