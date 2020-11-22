import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './views/HomePage';
import QuestionsPage from './views/QuestionsPage';
import ProfileResult from './views/ProfileResult';
import ProfilesDescription from './views/ProfilesDescription'
import TipsPage from './views/TipsPage'

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="HomePage" component={HomePage} />
                <Screen name="QuestionsPage" component={QuestionsPage}/>
                <Screen name="ProfileResult" component={ProfileResult} />
                <Screen name="ProfilesDescription" component={ProfilesDescription} />
                <Screen name="TipsPage" component={TipsPage} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Routes;