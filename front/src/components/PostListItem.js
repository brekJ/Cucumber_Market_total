//ListScreen에서 사용하는 아이템
import { ListItem, Image, Icon } from '@rneui/themed';

const PostListItem = ({ icon, title, price, imgUrl, onPress }) => {
  return (
    <ListItem
      containerStyle={{ flexDirection: 'row', paddingHorizontal: 0 }}
      onPress={onPress}
      bottomDivider
    >
      <Image
        containerStyle={imgUrl === undefined ? null : { flex: 1 }}
        source={imgUrl === undefined ? null : { uri: imgUrl }}
      />
      <Icon
        name={icon === undefined ? null : 'disabled-by-default'}
        iconStyle={icon === undefined ? null : { flex: 1 }}
        containerStyle={
          icon === undefined ? null : { flex: 1, justifyContent: 'center' }
        }
      />
      <ListItem.Content style={{ flex: 9 }}>
        <ListItem.Title>{title}</ListItem.Title>
        <ListItem.Subtitle>{price}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default PostListItem;
