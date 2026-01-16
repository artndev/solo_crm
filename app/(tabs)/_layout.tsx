import HomeIcon from '@/components/icons/(tabs)/Home'
import { useTheme } from '@/hooks/useTheme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-reanimated'
import Home from './home'
import Home2 from './home2'
import Home3 from './home3'

const Tab = createBottomTabNavigator()

export const TabsLayout = () => {
  const { theme } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: theme.bg,
        },
        tabBarStyle: {
          justifyContent: 'space-between',
          height: 85,
          borderTopWidth: 0,
          marginBottom: 0,
        },
        tabBarActiveTintColor: '#1A1F35',
        tabBarInactiveTintColor: '#8692A1',
        tabBarIcon: ({ focused, size, color }) => (
          <HomeIcon
            fill={focused ? color : ''}
            stroke={color}
            width={size}
            height={size}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Home 2',
          headerShown: false,
        }}
        name="home2"
        component={Home2}
      />
      <Tab.Screen
        options={{
          title: 'Home 3',
          headerShown: false,
        }}
        name="home3"
        component={Home3}
      />
    </Tab.Navigator>
  )
}

export default TabsLayout
