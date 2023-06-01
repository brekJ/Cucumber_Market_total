import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './routes.js';
import ContentTab from './ContentTab';
import MainScreen from '../screens/MainScreen';
import SignUpScreen from '../screens/SignUpScreen.js';
import SignInScreen from '../screens/SignInScreen.js';
import PostListScreen from '../screens/PostListScreen.js';
import DetailItemScreen from '../screens/PostListScreens/DetailItemScreen.js';
import NewItemScreen from '../screens/PostListScreens/NewItemScreen.js';
import SearchScreen from '../screens/PostListScreens/SearchScreen.js';
import ImagePickerScreen from '../screens/ItemPickerScreen.js';
import EditItemScreen from '../screens/PostListScreens/EditItemScreen.js';
import FavoriteItemScreen from '../screens/MyScreens/FavoriteItemScreen.js';
import DealLogScreen from '../screens/MyScreens/DealLogScreen.js';
import PurchaseLogScreen from '../screens/MyScreens/PurchaseLogScreen.js';
import ChatScreen from '../screens/ChatScreens/ChatScreen.js';
import CategoryScreen from '../screens/PostListScreens/CategoryScreen.js';
import ChartScreen from '../screens/ChartScreen.js';
import CategoryPostListScreen from '../screens/PostListScreens/CateogryPostListScreen.js';
import CategorySelectScreen from '../screens/PostListScreens/CategorySelectScreen.js';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.MAIN_SCREEN}
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.SIGN_UP_SCREEN}
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.SIGN_IN_SCREEN}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.CONTENT_TAB}
        component={ContentTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.POST_LIST_SCREEN} component={PostListScreen} />
      <Stack.Screen
        name={Routes.DETAIL_ITEM_SCREEN}
        component={DetailItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.NEW_ITEM_SCREEN}
        component={NewItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SEARCH_SCREEN}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={Routes.IMAGE_PICKER} component={ImagePickerScreen} />
      <Stack.Screen
        name={Routes.EDIT_ITEM_SCREEN}
        component={EditItemScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CHAT_SCREEN}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FAVORITE_ITEM_SCREEN}
        component={FavoriteItemScreen}
        options={{ title: '관심목록' }}
      />
      <Stack.Screen
        name={Routes.DEAL_LOG_SCREEN}
        component={DealLogScreen}
        options={{ title: '판매내역' }}
      />
      <Stack.Screen
        name={Routes.PURCHASE_LOG_SCREEN}
        component={PurchaseLogScreen}
        options={{ title: '구매내역' }}
      />
      <Stack.Screen
        name={Routes.CATEGORY_SCREEN}
        component={CategoryScreen}
        options={{ title: '카테고리' }}
      />
      <Stack.Screen
        name={Routes.CHART_SCREEN}
        component={ChartScreen}
        options={{ title: '차트' }}
      />
      <Stack.Screen
        name={Routes.CATEGORY_POSTLIST_SCREEN}
        component={CategoryPostListScreen}
        options={{ title: '카테고리 리스트' }}
      />
      <Stack.Screen
        name={Routes.CATEGORY_SELECT_SCREEN}
        component={CategorySelectScreen}
        options={{ title: '카테고리 선택' }}
      />
    </Stack.Navigator>
  );
};

export default ScreenStack;
