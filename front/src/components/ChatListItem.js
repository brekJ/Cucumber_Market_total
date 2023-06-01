import { ListItem, Avatar } from '@rneui/themed';
import { Routes } from '../navigations/routes';
import { useSelector } from 'react-redux';

const ChatListItem = ({ chatRoom, navigation }) => {
  const loginUser = useSelector((state) => state.User.loginUser);

  const onPressChatListItem = () => {
    navigation.navigate(Routes.CHAT_SCREEN, {
      roomInfo: chatRoom,
    });
  };

  return (
    <ListItem bottomDivider onPress={onPressChatListItem}>
      <Avatar
        rounded
        icon={{
          name: 'person-outline',
          type: 'material',
          size: 26,
        }}
        containerStyle={{ backgroundColor: 'grey' }}
      />
      <ListItem.Content>
        <ListItem.Title>
          {loginUser.userID === chatRoom.sellerUser.userID
            ? chatRoom.buyerUser.userName
            : chatRoom.sellerUser.userName}
        </ListItem.Title>
        <ListItem.Subtitle>{chatRoom.post.postTitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ChatListItem;
