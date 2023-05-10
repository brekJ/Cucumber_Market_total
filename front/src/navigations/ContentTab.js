//ListScreen밑에 있는 ContentTab

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Routes } from './routes';
import ListScreen from '../screens/ListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import MyScreen from '../screens/MyScreen';

const Tab = createBottomTabNavigator();
const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.LIST_SCREEN}
        component={ListScreen}
        options={{
          title: '물품 목록',
          tabBarIcon: () => <MaterialIcons name="home" size={34} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routes.CHAT_LIST_SCREEN}
        component={ChatListScreen}
        options={{
          title: '채팅',
          tabBarIcon: () => <MaterialIcons name="chat" size={34} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyScreen"
        component={MyScreen}
        options={{
          title: '내 정보',
          tabBarIcon: () => <MaterialIcons name="account-circle" size={34} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
