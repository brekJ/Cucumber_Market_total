import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { WHITE, GREEN } from '../colors';
import { ListItem } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from '@rneui/themed';
import { Routes } from '../navigations/routes';
import MyScreenItem from '../components/MyScreenItem';
import { useSelector } from 'react-redux';

const MyScreen = () => {
  const { top } = useSafeAreaInsets();
  const loginUser = useSelector((state) => state.User.loginUser);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <ListItem
        linearGradientProps={{
          colors: [GREEN.START_GREEN, GREEN.END_GREEN],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
        ViewComponent={LinearGradient} // Only if no expo
      >
        <Avatar
          rounded
          icon={{
            name: 'person-outline',
            type: 'material',
            size: 32,
          }}
          containerStyle={[styles.profile, { backgroundColor: 'grey' }]}
        />
        <ListItem.Content>
          <ListItem.Title
            style={[{ color: 'black', fontWeight: 'bold' }, styles.listItem]}
          >
            {loginUser.userName}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <MyScreenItem
        route={Routes.FAVORITE_ITEM_SCREEN}
        iconName={'favorite'}
        color={GREEN.START_GREEN}
        title={'관심목록'}
      />
      <MyScreenItem
        route={Routes.DEAL_LOG_SCREEN}
        iconName={'article'}
        color={GREEN.START_GREEN}
        title={'판매내역'}
      />
      <MyScreenItem
        route={Routes.PURCHASE_LOG_SCREEN}
        iconName={'basket'}
        iconType={'material-community'}
        color={GREEN.START_GREEN}
        title={'구매내역'}
      />
      <MyScreenItem
        route={Routes.MAIN_SCREEN}
        iconName={'logout'}
        iconType={'material-community'}
        color={GREEN.START_GREEN}
        title={'로그아웃'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  listItem: {
    fontSize: 20,
  },
});

export default MyScreen;
