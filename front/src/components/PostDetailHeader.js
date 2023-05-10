import { View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

const PostDetailHeader = ({
  isMadeByUser = 'none',
  onDeletePostHandler,
  onEditPostHandler,
}) => {
  return (
    <View style={[{ display: isMadeByUser ? '' : 'none' }, styles.heading]}>
      <Icon onPress={onDeletePostHandler} name="delete" />
      <Icon onPress={onEditPostHandler} name="edit" />
    </View>
  );
};

export default PostDetailHeader;

const styles = StyleSheet.create({
  heading: { flexDirection: 'row-reverse', paddingHorizontal: 12 },
});
