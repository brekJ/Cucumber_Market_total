import { View, Image, Text, Pressable, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { Icon, Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {
  getPosts,
  getUser,
  updateUser,
  deletePost,
  createChatRoom,
} from '../../functions/CRUDFunctions';
import { Routes } from '../../navigations/routes';
import { useSelector, useDispatch } from 'react-redux';
import { setPostListItems } from '../../redux/PostListSlice';
import { setLoginUser } from '../../redux/UserSlice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { GRAY } from '../../colors';
import PostDetailHeader from '../../components/PostDetailHeader';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

const findPost = (posts, id) => {
  for (let index in posts) {
    if (posts[index].postID === id) return posts[index];
  }
};

const date = new Date();
let currentTime = new Date(date.getTime() + TIME_ZONE)
  .toISOString()
  .replace('T', ' ')
  .slice(0, -5)
  .toString();

function DetailItemScreen({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();
  const width = useWindowDimensions().width;

  const id = route.params.id;

  const loginUser = useSelector((state) => state.User.loginUser);
  const posts = useSelector((state) => state.PostList.postListItems);
  const post = findPost(posts, id);

  const [favorite, setFavorite] = useState('favorite-outline');

  const onDeleteButtonHandler = () => {
    deletePost(id)
      .then((deletedPost) => {
        getPosts()
          .then((posts) => {
            dispatch(setPostListItems(posts));
          })
          .catch((err) => {
            console.log(err);
          });
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onEditButtonHandler = () => {
    navigation.navigate(Routes.EDIT_ITEM_SCREEN, {
      post: post,
    });
  };

  const onChatButtonHandler = () => {
    const chatRoomFd = new FormData();
    chatRoomFd.append('Post', post.postID);
    chatRoomFd.append('SellerUser', post.user.userTableID);
    chatRoomFd.append('BuyerUser', loginUser.userTableID);
    chatRoomFd.append('created', currentTime);
    chatRoomFd.append('updated', currentTime);
    chatRoomFd.append('statuss', 1);
    createChatRoom(chatRoomFd)
      .then((res) => {
        navigation.navigate(Routes.CHAT_SCREEN, {
          roomInfo: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleFavoriteButton = () => {
    if (favorite === 'favorite-outline') {
      setFavorite('favorite');
    } else if (favorite === 'favorite') {
      setFavorite('favorite-outline');
    }
  };

  const onFavoriteButtonHandler = () => {
    const formdata = new FormData();
    formdata.append('userID', loginUser.userID);
    formdata.append('userName', loginUser.userName);
    formdata.append('password', loginUser.password);
    formdata.append(
      'created',
      new Date(date.getTime(loginUser.created) + TIME_ZONE)
        .toISOString()
        .replace('T', ' ')
        .slice(0, -5)
        .toString()
    );
    formdata.append('updated', currentTime);
    formdata.append('userImage', loginUser.userImage);
    formdata.append('statuss', loginUser.statuss);
    const fposts = loginUser.favoritePostID.filter((pid) => pid !== id);
    if (favorite === 'favorite-outline') {
      formdata.append('favoritePostID', [...fposts, id]);
    } else if (favorite === 'favorite') {
      formdata.append('favoritePostID', [...fposts]);
    }
    updateUser(loginUser.userTableID, formdata).then((res) => {
      toggleFavoriteButton();
      console.log(res);
    });
  };

  useEffect(() => {
    getUser(loginUser.userTableID).then((res) => {
      dispatch(setLoginUser(res));
    });
  }, [favorite]);

  useEffect(() => {
    const e = loginUser.favoritePostID.find((pid) => pid === id);
    if (e !== undefined) {
      toggleFavoriteButton();
    }
  }, []);

  return (
    <View style={[{ paddingTop: top }, styles.root]}>
      <PostDetailHeader
        isMadeByUser={
          loginUser.userTableID === post.user.userTableID ? true : false
        }
        onDeletePostHandler={onDeleteButtonHandler}
        onEditPostHandler={onEditButtonHandler}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: post.postImage.toString() }}
        />
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            icon={{
              name: 'person-outline',
              type: 'material',
              size: 32,
            }}
            containerStyle={[styles.profile, { backgroundColor: 'grey' }]}
          />
          <View style={styles.title}>
            <Text style={{ fontSize: 16, marginBottom: 5,flexWrap:'wrap',width:width-80 }} numberOfLines={3}>
              {post.postTitle}
            </Text>
            <Icon
              style={{
                display:
                  loginUser.userTableID === post.user.userTableID
                    ? 'none'
                    : 'flex',
              }}
              name={favorite}
              onPress={onFavoriteButtonHandler}
            />
          </View>
        </View>
        <View style={styles.detailContainer}>
        <ScrollView style={{ marginHorizontal: '2.5%', marginTop: '2.5%' }}>
    <Text style={{ fontSize: 16, marginBottom: 5 }}>
      {post.postContent}
    </Text>
  </ScrollView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>{post.postCost} 원</Text>
        <Pressable
          style={[
            styles.button,
            loginUser.userTableID === post.user.userTableID || post.postDealDone
              ? {
                  borderWidth: 2,
                  borderColor: GRAY.LIGHT,
                  backgroundColor: GRAY.DEFAULT,
                }
              : '',
            {
              display:
                loginUser.userTableID === post.user.userTableID ||
                post.postDealDone
                  ? 'none'
                  : 'flex',
            },
          ]}
          disabled={
            loginUser.userTableID === post.user.userTableID || post.postDealDone
              ? true
              : false
          }
          onPress={onChatButtonHandler}
        >
          <Text
            style={{
              fontSize: 20,
              color:
                loginUser.userTableID === post.user.userTableID
                  ? GRAY.LIGHT
                  : '#0DA54B',
            }}
          >
            거래 채팅
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default DetailItemScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageContainer: {
    flex: 5,
  },
  image: {
    flex: 1,
  },
  centerContainer: {
    flex: 5,
  },
  profileContainer: {
    flex: 1,
    borderBottomColor: GRAY.DEFAULT,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profile: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  title: {
    alignItems: 'flex-start',
  },
  detailContainer: {
    flex: 4,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: '#0DA54B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  price: {
    color: 'white',
    flex: 2,
    fontSize: 28,
    marginRight: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    flex: 3,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
