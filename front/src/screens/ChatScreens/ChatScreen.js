import { View, StyleSheet, FlatList } from 'react-native';
import { Icon, Text, Input } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { GREEN } from '../../colors';

const ChatScreen = ({ navigation, route }) => {
  const { top, bottom } = useSafeAreaInsets();

  const [chats, setChats] = useState([]);
  const [chatText, setChatText] = useState('');

  const user = route.params.user;

  const onPressSendHandler = () => {
    setChats([...chats, chatText]);
    setChatText('');
  };

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}
    >
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{ flex: 1 }} h4>
          {user.userName}
        </Text>
        <Icon name="more-vert" />
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          data={chats}
          renderItem={(item) => {
            return (
              <View
                style={{
                  backgroundColor: GREEN.START_GREEN,
                  padding: 10,
                  marginLeft: '45%',
                  borderRadius: 5,
                  //marginBottom: 15,
                  marginTop: 5,
                  marginRight: '5%',
                  maxWidth: '50%',
                  alignSelf: 'flex-end',
                  //maxWidth: 500,

                  borderRadius: 20,
                }}
              >
                <Text style={{ fontSize: 16, color: '#fff' }}>{item.item}</Text>

                <View style={styles.rightArrow}></View>

                <View style={styles.rightArrowOverlap}></View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        ></FlatList>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ flex: 1 }}>
          <Input
            value={chatText}
            onChangeText={(text) => {
              setChatText(text);
            }}
          />
        </View>
        <View>
          <Icon name="send" size={38} onPress={onPressSendHandler} />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 12 },
  header: {
    flexDirection: 'row',
    paddingBottom: 6,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  chatContainer: { flex: 5 },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 5,
    borderTopColor: 'grey',
  },
  rightArrow: {
    position: 'absolute',
    backgroundColor: GREEN.START_GREEN,
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
});
