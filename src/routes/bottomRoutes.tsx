import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';

import { Front } from '../screens/Front/Front'
import { Back } from '../screens/Back/Back'

const { Screen, Navigator } = createBottomTabNavigator()

export function BottomRoutes() {
    return (
        <Navigator>
            <Screen name="Front" component={Front}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarIcon: () => (
                        <AntDesign name="user" size={20} color="black" />
                    ),
                }}
            />
            <Screen name="Back" component={Back}
                options={{
                    tabBarLabelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
                    tabBarIcon: () => (
                        <AntDesign name="idcard" size={24} color="black" />),
                }}
            />
        </Navigator>
    )
}