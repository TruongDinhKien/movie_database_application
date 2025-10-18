import React from "react"
import Theme from "theme"
import { Home, WishList } from "screens"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faHome, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const createIconTab = (icon: IconProp, size?: number) => ({ focused }: { focused: boolean }) => <FontAwesomeIcon icon={icon} color={focused ? Theme.colors.primary : Theme.colors.white} size={size} />

const BookmarkIcon = createIconTab(faBookmark, 22);
const HomeIcon = createIconTab(faHome, 26);

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Theme.colors.tertiary,
          height: 50
        },
        sceneStyle: {
          backgroundColor: Theme.colors.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WishList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: BookmarkIcon
        }}
      />
    </Tab.Navigator>
  )
}