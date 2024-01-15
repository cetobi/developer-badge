import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Front } from '../screens/Front/Front'
import { Back } from '../screens/Back/Back'

const { Screen, Navigator } = createBottomTabNavigator()

export function BottomRoutes() {
    return (
        <Navigator>
            <Screen name="Front" component={Front} />
            <Screen name="Back" component={Back} />
        </Navigator>
    )
}