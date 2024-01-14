import { NavigationContainer } from '@react-navigation/native'
import { BottomRoutes } from './routes'

export function Routes() {
    return (
        <NavigationContainer>
            <BottomRoutes />
        </NavigationContainer>
    )
}