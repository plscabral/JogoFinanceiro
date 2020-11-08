import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './views/HomePage';
import QuestionsPage from './views/QuestionsPage';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="HomePage" component={HomePage} />
                <Screen name="QuestionsPage" component={QuestionsPage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;