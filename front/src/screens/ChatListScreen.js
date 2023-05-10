import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Routes } from '../navigations/routes';
import { WHITE } from '../colors';
import ChatListItem from '../components/ChatListItem';
import ChatListHeader from '../components/ChatListHeader';

const ChatScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: top }]}>
      <ChatListHeader />
      <View style={styles.chatContainer}>
        <ChatListItem
          name="가순원"
          lastChat="안녕하세요"
          onPress={() => {
            navigation.navigate(Routes.CHAT_SCREEN, {
              user: {
                userID: 2,
                created: null,
                phoneNumber: '01022345678',
                statuss: 0,
                updated: null,
                userImage: null,
                userName: '가순원',
                favoritePostID: [3, 8, 60, 75],
              },
            });
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
