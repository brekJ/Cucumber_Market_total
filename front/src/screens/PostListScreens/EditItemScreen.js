import {
  View,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Button, Icon, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigations/routes';
import { updatePost, uploadImage } from '../../functions/CRUDFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { WHITE, GRAY, BLACK, GREEN } from '../../colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setCategoryValue } from '../../redux/CategorySlice';
import { setImageValue } from '../../redux/ImageSlice';
import SafeInputView from '../../components/SafeInputView';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

function EditItemScreen({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  const { top, bottom } = useSafeAreaInsets();

  const date = new Date();
  let currentTime = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5)
    .toString();

  const post = route.params.post;

  const images = useSelector((state) => state.Image.value);
  const loginUser = useSelector((state) => state.User.loginUser);
  const category = useSelector((state) => state.Category.value);

  const [postImage, setPostImage] = useState(post.postImage[0]);
  const [postTitle, setPostTitle] = useState(post.postTitle);
  const [postCost, setPostCost] = useState(post.postCost);
  const [postContent, setPostContent] = useState(post.postContent);

  const createPostFd = () => {
    const formdata = new FormData();
    formdata.append(
      'created',
      new Date(date.getTime(post.created) + TIME_ZONE)
        .toISOString()
        .replace('T', ' ')
        .slice(0, -5)
        .toString()
    );
    formdata.append('updated', currentTime);
    formdata.append('postTitle', postTitle);
    formdata.append('postContent', postContent);
    formdata.append('postCost', postCost);
    formdata.append('category', category);
    formdata.append('user', loginUser.userTableID);
    formdata.append('postDealDone', post.postDealDone);
    formdata.append('postImage', [postImage]);
    formdata.append('statuss', 0);
    formdata.append('townID', 0);
    return formdata;
  };

  const submitPostHandler = () => {
    uploadImage(images).then((res) => {
      setPostImage(res);
      updatePost(post.postID, createPostFd())
        .then((res) => {
          if (res !== '' && res != undefined) {
            navigation.reset({
              index: 0,
              routes: [{ name: Routes.CONTENT_TAB }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    if (images.length !== 0) {
      setPostImage(images[0].uri);
    }
  }, [images]);

  useEffect(() => {
    setPostImage(post.postImage[0]);
    dispatch(setCategoryValue(post.category.categoryID));
  }, []);

  return (
    <SafeInputView>
      <View style={[{ paddingTop: top, paddingBottom: bottom }, styles.root]}>
        <Pressable
          onPress={() =>
            navigation.navigate(Routes.IMAGE_PICKER, { post: post })
          }
        >
          <View
            style={[
              { width: width / 5, height: width / 5 },
              styles.cameraButton,
            ]}
          >
            <Image
              source={{
                uri: postImage,
              }}
              transition={true}
              resizeMode="stretch"
              style={{
                aspectRatio: 1,
                flex: 1,
              }}
            />
          </View>
        </Pressable>
        <Button
          style={styles.categoryButton}
          title={'카테고리 선택'}
          type="clear"
          containerStyle={{ flex: 1 }}
          icon={<Icon name="arrow-right" />}
          iconPosition="left"
          titleStyle={{ color: BLACK }}
          onPress={() => {
            navigation.navigate(Routes.CATEGORY_SELECT_SCREEN, { post: post });
          }}
        />
        <View
          style={{
            width: width - 20,
            justifyContent: 'flex-start',
            flex: 6,
            paddingRight: 20,
          }}
        >
          <TextInput
            style={styles.titleInput}
            placeholder="제목"
            onChangeText={(text) => {
              setPostTitle(text);
            }}
            defaultValue={postTitle}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.costInput}
            placeholder="W 가격"
            onChangeText={(text) => {
              setPostCost(text);
            }}
            defaultValue={postCost.toString()}
          />
          {/* <TextInput style={styles.spotInput} placeholder="거래 희망 장소" /> */}
          <TextInput
            style={styles.contentInput}
            placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매 금지 물품은 게시가 제한될 수 있어요.)"
            onChangeText={setPostContent}
            maxLength={500}
            multiline={true}
            defaultValue={postContent}
          />
        </View>
        <Button
          title="글 수정하기"
          type="clear"
          titleStyle={{ color: GREEN.START_GREEN }}
          onPress={submitPostHandler}
        ></Button>
      </View>
    </SafeInputView>
  );
}

export default EditItemScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  cameraButton: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    top: 25,
    backgroundColor: GRAY.LIGHT,
    borderColor: GRAY.DEFAULT,
    borderWidth: 2,
    borderRadius: 5,
  },
  categoryButton: {
    alignItems: 'flex-start',
    top: 40,
    width: 200,
    height: 50,
  },
  titleInput: {
    fontSize: 20,
    top: 60,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  costInput: {
    fontSize: 20,
    top: 100,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  spotInput: {
    fontSize: 20,
    top: 140,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  contentInput: {
    fontSize: 20,
    top: 200,
    left: 25,
  },
});
