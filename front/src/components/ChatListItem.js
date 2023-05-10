import { ListItem, Avatar } from '@rneui/themed';

const ChatListItem = ({ source, name, lastChat, onPress }) => {
  return (
    <ListItem bottomDivider onPress={onPress}>
      <Avatar
        rounded
        icon={
          source === undefined
            ? {
                name: 'person-outline',
                type: 'material',
                size: 26,
              }
            : null
        }
        source={source === undefined ? null : source}
        containerStyle={
          source === undefined ? { backgroundColor: 'grey' } : null
        }
      />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>{lastChat}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default ChatListItem;
