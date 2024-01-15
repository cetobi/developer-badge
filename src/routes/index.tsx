import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserProvider from '../contexts/userContext'
import { StackRoutes } from './stackRoutes'
import { BottomRoutes } from './bottomRoutes'

const { Screen, Navigator } = createNativeStackNavigator()

export function Routes() {
    return (
        <NavigationContainer>
            <UserProvider>
                <Navigator>
                    <Screen name="Stack" component={StackRoutes} options={{ headerShown: false }} />
                    <Screen name="Bottom" component={BottomRoutes} options={{ headerShown: false }} />
                </Navigator>
            </UserProvider>
        </NavigationContainer>
    )
}