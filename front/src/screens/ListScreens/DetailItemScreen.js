import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { Icon, Avatar, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {
  getPosts,
  deletePost,
  createChatRoom,
} from '../../functions/CRUDFunctions';
import { Routes } from '../../navigations/routes';
import { useSelector, useDispatch } from 'react-redux';
import { setListItems } from '../../redux/ListSlice';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GRAY } from '../../colors';
import { touchProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import PostDetailHeader from '../../components/PostDetailHeader';

const findPost = (posts, id) => {
  for (let index in posts) {
    if (posts[index].postID === id) return posts[index];
  }
};

function DetailItemScreen({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  const id = route.params.id;

  const loginUser = useSelector((state) => state.User.loginUser);
  const posts = useSelector((state) => state.List.listItems);
  const post = findPost(posts, id);

  const onDeleteButtonHandler = () => {
    deletePost(id)
      .then((deletedPost) => {
        console.log(deletedPost);
        getPosts()
          .then((posts) => {
            dispatch(setListItems(posts));
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
      id: post.postID,
      title: post.postTitle,
      category: post.category,
      cost: post.postCost,
      content: post.postContent,
    });
  };

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
        <Image style={styles.image} />
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.profileContainer}>
          <Avatar
            rounded
            icon={{
              name: 'person-outline',
              type: 'material',
              size: 40,
            }}
            containerStyle={[styles.profile, { backgroundColor: 'grey' }]}
          />
          <View style={styles.title}>
            <Text style={{ fontSize: 20, marginBottom: 5 }}>
              {post.postTitle}
            </Text>
            <Icon name="favorite-outline" />
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Text>{post.postContent}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>{post.postCost} 원</Text>
        <Pressable
          style={[
            styles.button,
            loginUser.userTableID === post.user.userTableID
              ? {
                  borderWidth: 2,
                  borderColor: GRAY.LIGHT,
                  backgroundColor: GRAY.DEFAULT,
                }
              : '',
          ]}
          disabled={
            loginUser.userTableID === post.user.userTableID ? true : false
          }
          onPress={() => {
            navigation.navigate(Routes.CHAT_SCREEN, { user: post.user });
          }}
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
