//ListScreen밑에 있는 ContentTab

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Routes } from './routes';
import PostListScreen from '../screens/PostListScreen';
import ChatListScreen from '../screens/ChatListScreen';
import MyScreen from '../screens/MyScreen';
import ChartScreen from '../screens/ChartScreen';

const Tab = createBottomTabNavigator();
const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Routes.POST_LIST_SCREEN}
        component={PostListScreen}
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
        name={Routes.CHART_SCREEN}
        component={ChartScreen}
        options={{
          title: '차트',
          tabBarIcon: () => <AntDesign name="linechart" size={34} color="black" />,
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
