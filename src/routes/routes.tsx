import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home/Home'
import { Front } from '../screens/Front/Front'
import { Back } from '../screens/Back/Back'

const { Screen, Navigator } = createBottomTabNavigator()

export function BottomRoutes() {
    return (
        <Navigator>
            <Screen name="Front" component={Front} />
            <Screen name="Home" component={Home} />
            <Screen name="Back" component={Back} />
        </Navigator>
    )
}