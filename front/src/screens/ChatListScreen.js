import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChatListItems } from '../redux/ChatListSlice';
import { getChatRooms } from '../functions/CRUDFunctions';
import { WHITE } from '../colors';
import ChatListItem from '../components/ChatListItem';
import ChatListHeader from '../components/ChatListHeader';

const ChatScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();
  const dispatch = useDispatch();

  const listItems = useSelector((state) => state.ChatList.chatListItems);
  const loginUser = useSelector((state) => state.User.loginUser);

  const [refreshing, setRefreshing] = useState(false);

  const getRefreshData = async () => {
    setRefreshing(true);
    getChatRooms(loginUser.userTableID)
      .then((res) => {
        dispatch(setChatListItems(res));
      })
      .catch((err) => {
        console.log(err);
      });
    setRefreshing(false);
  };

  const onRefresh = () => {
    if (!refreshing) {
      getRefreshData();
    }
  };

  useEffect(() => {
    getChatRooms(loginUser.userTableID).then((res) => {
      dispatch(setChatListItems(res));
    });
  }, []);

  return (
    <View style={[styles.root, { paddingTop: top }]}>
      <ChatListHeader />
      <View style={styles.chatContainer}>
        <FlatList
          onRefresh={onRefresh}
          refreshing={refreshing}
          data={listItems}
          renderItem={({ item }) => {
            return <ChatListItem chatRoom={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: WHITE },
  chatContainer: {
    flex: 10,
  },
});
