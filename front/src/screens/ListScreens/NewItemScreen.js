import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  useWindowDimensions,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Button, Overlay, ListItem, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigations/routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  createPost,
  getCategories,
  uploadImage,
} from '../../functions/CRUDFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { WHITE, GRAY, BLACK } from '../../colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../../components/SafeInputView';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

function NewItemScreen() {
  const navigation = useNavigation();

  const width = useWindowDimensions().width;
  const { top, bottom } = useSafeAreaInsets();

  const date = new Date();
  let currentTime = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5)
    .toString();

  const images = useSelector((state) => state.Image.value);
  const loginUser = useSelector((state) => state.User.loginUser);

  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  const [postCategory, setPostCategory] = useState(null);
  const [postTitle, setPostTitle] = useState('');
  const [postCost, setPostCost] = useState(-1);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createPostFd = () => {
    const formdata = new FormData();
    formdata.append('created', currentTime);
    formdata.append('updated', currentTime);
    formdata.append('postTitle', postTitle);
    formdata.append('postContent', postContent);
    formdata.append('postCost', postCost);
    formdata.append('category', postCategory.categoryID);
    formdata.append('user', loginUser.userTableID);
    formdata.append('postDealDone', false);
    formdata.append('postImage', null);
    formdata.append('statuss', 0);
    formdata.append('townID', 0);
    return formdata;
  };

  const handleSaveToDB = () => {
    uploadImage(images);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const submitPostHandler = () => {
    createPost(createPostFd())
      .then((res) => {
        if (res !== '' && res != undefined) {
          navigation.goBack();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeInputView>
      <View style={[{ paddingTop: top, paddingBottom: bottom }, styles.root]}>
        <Pressable onPress={() => navigation.navigate(Routes.IMAGE_PICKER)}>
          <View
            style={[
              { width: width / 5, height: width / 5 },
              styles.cameraButton,
            ]}
          >
            <MaterialCommunityIcons size={30} name="camera" />
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
          onPress={toggleOverlay}
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
          />
          <TextInput
            style={styles.costInput}
            placeholder="W 가격"
            onChangeText={(text) => {
              setPostCost(text);
            }}
          />
          <TextInput style={styles.spotInput} placeholder="거래 희망 장소" />
          <TextInput
            style={styles.contentInput}
            placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매 금지 물품은 게시가 제한될 수 있어요.)"
            onChangeText={setPostContent}
            maxLength={500}
            multiline={true}
          />
        </View>

        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={{ width: '80%' }}
        >
          <ScrollView>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title
                  onPress={() => {
                    for (const i in categories) {
                      if (categories[i].categoryID === 1) {
                        setPostCategory(categories[i]);
                        break;
                      }
                    }
                    toggleOverlay();
                  }}
                >
                  디지털기기
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>가구/인테리어</ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>어린이/아기</ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>패션</ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>스포츠/레저</ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>중고차/자동차</ListItem.Title>
              </ListItem.Content>
            </ListItem>

            <ListItem>
              <ListItem.Content>
                <ListItem.Title>도서 및 미디어</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </ScrollView>
        </Overlay>

        <Button title={'이미지 uri 테스트'} onPress={handleSaveToDB}></Button>
        <Button
          title="글쓰기"
          type="clear"
          onPress={submitPostHandler}
        ></Button>
      </View>
    </SafeInputView>
  );
}

export default NewItemScreen;

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
