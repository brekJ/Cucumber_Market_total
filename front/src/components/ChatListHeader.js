import { View, StyleSheet } from 'react-native';
import { Text, Icon } from '@rneui/themed';

const ChatListHeader = () => {
  return (
    <View style={styles.header}>
      <Text h4 style={{ flex: 1 }}>
        채팅
      </Text>
      <Icon name="notifications" />
    </View>
  );
};

export default ChatListHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
});
