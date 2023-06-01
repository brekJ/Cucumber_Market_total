import { View, StyleSheet, FlatList } from 'react-native';
import { Icon, Text, Input, Image, Button } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  createChatContent,
  getChatContents,
  getPost,
  updatePost,
  deleteChatRoom,
} from '../../functions/CRUDFunctions';
import { Routes } from '../../navigations/routes';
import { GREEN } from '../../colors';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

const ChatScreen = ({ navigation, route }) => {
  const date = new Date();
  let currentTime = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5)
    .toString();

  const { top, bottom } = useSafeAreaInsets();

  const [chats, setChats] = useState([]);
  const [chatText, setChatText] = useState('');

  const loginUser = useSelector((state) => state.User.loginUser);
  const roomInfo = route.params.roomInfo;
  const opponent =
    loginUser.userTableID === roomInfo.sellerUser.userTableID
      ? roomInfo.buyerUser
      : roomInfo.sellerUser;

  const onPressSendHandler = () => {
    const formdata = new FormData();
    formdata.append('created', currentTime);
    formdata.append('updated', currentTime);
    formdata.append('chatRoom', roomInfo.chatRoomID);
    formdata.append('user', loginUser.userTableID);
    formdata.append('content', chatText);
    formdata.append('chatImage', null);
    formdata.append('statuss', 1);
    createChatContent(formdata).then((res) => {
      setChats([...chats, res]);
    });
    setChatText('');
  };

  const onPressDealDoneHandler = () => {
    getPost(roomInfo.post.postID).then((res) => {
      const formdata = new FormData();
      formdata.append(
        'created',
        new Date(date.getTime(res.created) + TIME_ZONE)
          .toISOString()
          .replace('T', ' ')
          .slice(0, -5)
          .toString()
      );
      formdata.append('updated', currentTime);
      formdata.append('postTitle', res.postTitle);
      formdata.append('postContent', res.postContent);
      formdata.append('postCost', res.postCost);
      formdata.append('category', res.category.categoryID);
      formdata.append('user', res.user.userTableID);
      formdata.append('postDealDone', true);
      formdata.append('postImage', res.postImage);
      formdata.append('statuss', 0);
      formdata.append('townID', 0);
      updatePost(roomInfo.post.postID, formdata).then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: Routes.CONTENT_TAB }],
        });
      });
    });
  };

  const onPressDeleteButtonHandler = () => {
    deleteChatRoom(roomInfo.chatRoomID).then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: Routes.CONTENT_TAB }],
      });
    });
  };

  useEffect(() => {
    getChatContents(roomInfo.chatRoomID).then((res) => {
      setChats(res);
    });
  }, []);

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
          {opponent.userName}
        </Text>
        <Icon name="delete-forever" onPress={onPressDeleteButtonHandler} />
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          data={chats}
          renderItem={(item) => {
            return (
              <View
                style={
                  item.item.user.userTableID === loginUser.userTableID
                    ? styles.myChatBubble
                    : styles.opponentChatBubble
                }
              >
                <Text style={{ fontSize: 16, color: '#fff' }}>
                  {item.item.content}
                </Text>

                <View
                  style={
                    item.item.user.userTableID === loginUser.userTableID
                      ? styles.rightArrow
                      : styles.leftArrow
                  }
                ></View>

                <View
                  style={
                    item.item.user.userTableID === loginUser.userTableID
                      ? styles.rightArrowOverlap
                      : styles.leftArrowOverlap
                  }
                ></View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index}
        ></FlatList>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          display:
            roomInfo.sellerUser.userTableID === loginUser.userTableID
              ? 'flex'
              : 'none',
          borderTopWidth: 5,
          borderColor: 'grey',
        }}
      >
        <Image
          source={{ uri: roomInfo.post.postImage[0] }}
          containerStyle={{ height: '90%', flex: 2 }}
        />
        <View style={{ flex: 4, alignItems: 'flex-end', paddingRight: '5%' }}>
          <Text h3>{roomInfo.post.postTitle}</Text>
          <Text h3>{roomInfo.post.postCost + ' 원'}</Text>
          <Text h4>{roomInfo.post.user.userName}</Text>
        </View>
        <Button
          onPress={onPressDealDoneHandler}
          containerStyle={{
            flex: 2,
            height: '80%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
          buttonStyle={{
            flex: 1,
            backgroundColor: GREEN.START_GREEN,
          }}
          title={'판매완료'}
        ></Button>
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
  root: { flex: 1, paddingHorizontal: 6 },
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
  opponentChatBubble: {
    backgroundColor: GREEN.START_GREEN,
    padding: 10,
    marginLeft: '5%',
    borderRadius: 5,
    marginTop: 5,
    marginRight: '45%',
    maxWidth: '50%',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  leftArrow: {
    position: 'absolute',
    backgroundColor: GREEN.START_GREEN,
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },
  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#eeeeee',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -19,
  },
  myChatBubble: {
    backgroundColor: GREEN.START_GREEN,
    padding: 10,
    marginLeft: '45%',
    borderRadius: 5,
    marginTop: 5,
    marginRight: '5%',
    maxWidth: '50%',
    alignSelf: 'flex-end',
    borderRadius: 20,
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
