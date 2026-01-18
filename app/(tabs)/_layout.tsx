import HomeIcon from '@/components/icons/(tabs)/Home'
import { useTheme } from '@/hooks/useTheme'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Home from './home'
import Home2 from './home2'
import Home3 from './home3'

const Tab = createBottomTabNavigator()

export const TabsLayout = () => {
  const insets = useSafeAreaInsets()
  const { colorScheme, theme } = useTheme()

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: colorScheme === 'dark' ? '#161616' : '#FFF',
          },
          tabBarStyle: {
            backgroundColor: theme.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            height: 85 + insets.bottom,
            borderTopWidth: 0,
            marginBottom: 0,
            elevation: 0,
            shadowOpacity: 0,
            paddingTop: 12,
            overflow: 'hidden',
          },
          tabBarActiveTintColor: colorScheme === 'dark' ? '#FFF' : '#1A1F35',
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
    </>
  )
}

export default TabsLayout
