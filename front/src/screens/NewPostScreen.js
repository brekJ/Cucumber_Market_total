import { Text,View, StyleSheet, Pressable, ScrollView, useWindowDimensions,TextInput} from 'react-native';
import { useEffect, useReducer, useState } from 'react';
import { Input, Button, Overlay, ListItem, Icon } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Routes } from '../navigations/routes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import SafeInputView from '../components/SafeInputView';
import { categories } from '../functions/Setting';
import { BLACK, GRAY,GREEN, WHITE } from '../colors';
import { createPost } from '../functions/CRUDFunctions';
import { ImagesEdit } from '../functions/ImagesEdit';

const NewPostScreen = () => {
    const width = useWindowDimensions().width;    
    const dispatch = useDispatch();
    var category = []
    for(var i =0;i<5;i++){
        category.push(categories[i])
    }
    const loginUser = useSelector(state=>state.User.loginUser) 
    const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
    const date = new Date();
    var currentTime = new Date(date.getTime() + TIME_ZONE).toISOString().replace('T', ' ').slice(0, -5).toString();
    var post = new FormData();

    
    const listItems = useSelector((state) => state.List.listItems);
    

  const navigation = useNavigation();
  const route = useRoute();
  
const postReducer = (state, action) => {
  switch (action.type) {
    case 'CATEGORY':
      state.category = action;
      return state;

    case 'TITLE':
      state.postTitle = action.title;
      return state;

    case 'COST':
      state.postCost = action.cost;
      return state;

    case 'CONTENT':
      state.postContent = action.content;
      return state;

    case 'IMAGE':
      state.postImage = action.image;
      return state;

    /*case 'TOWNCONTENT':
      state.postTownID = action.value;
      return state;*/

    default:
      return {
        image: '',
        title: '',
        cost: '',
        content: '',
      };
  }
};
const [postState, dispatchPost] = useReducer(postReducer, {
    postID: listItems.length+1,
    created: currentTime,
    postContent: "",
    postCost: null,
    postDealDone: false,
    postImage: null,
    postTitle: "",
    statuss: 0,
    postTownID: 3,
    updated: currentTime,
    category: 1,
    user: loginUser,
});

const onChangeTitleHandler = (text) => {
  dispatchPost({ type: 'TITLE', title: text });
  console.log(postState.postTitle);
};
const onChangeCostHandler = (text) => {
  dispatchPost({ type: 'COST', cost: text });
  console.log(postState.postCost);
};
const onChangeContentHandler = (text) => {
  dispatchPost({ type: 'CONTENT', content: text });
  console.log(postState.postContent);
};
const onChangeTownHandler = (value) => {
  dispatchPost({ type: 'TOWNCONTENT', content: value});
  console.log(postState.postTownID)
};

  const [visible, setVisible] = useState(false);
  const images = useSelector((state) => state.Image.value);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const onSubmit = () => {
    const postData = postState
    post.append('postID',postData.postID);
    post.append('created',postData.created);
    post.append('postContent',postData.postContent);
    post.append('postCost',postData.postCost);
    post.append('postDealDone',postData.postDealDone);
    post.append('postImage',null);
    post.append('postTitle',postData.postTitle);
    post.append('statuss',postData.statuss);
    post.append('townID',postData.postTownID);
    post.append('updated',postData.updated);
    post.append('category',postData.category);
    post.append('user',postData.user);
    console.log(post)
    createPost(post)
    navigation.goBack()
  }

  return (
    <SafeInputView>
      <View style={styles.root}>
        <Pressable onPress={() => navigation.navigate(Routes.IMAGE_PICKER)}>
        <View style ={[{width:width/5, height: width/5},styles.cameraButton]}>
        <MaterialCommunityIcons size={30}
        name='camera'
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
            onPress={toggleOverlay}
          />

        <View style={{width:(width-20) , justifyContent: 'flex-start', flex:6, paddingRight: 20}}>
            <TextInput style={styles.titleInput}
              placeholder="제목"
              onChangeText={onChangeTitleHandler}
            />
            <TextInput style={styles.costInput}
              placeholder="W 가격"
              onChangeText={onChangeCostHandler}
            />
            <TextInput style={styles.spotInput}
              placeholder="거래 희망 장소"
              /*conChangeText={onChangeTownHandler}*/
            />
            <TextInput style={styles.contentInput}
              placeholder="올릴 게시글 내용을 작성해주세요. (가품 및 판매 금지 물품은 게시가 제한될 수 있어요."
              onChangeText={onChangeContentHandler}
              maxLength={500}
              multiline={true}
            />
            
        </View>
        <Button onPress={onSubmit}><Text>글쓰기</Text></Button>
      </View>
    </SafeInputView>
  );
}

export default NewPostScreen;

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
    borderColor:GRAY.DEFAULT,
    borderWidth: 2,
    borderRadius: 5,
  },
  categoryButton:{
    alignItems: 'flex-start',
    top:40,
    width:200,
    height:50,
  },
  titleInput:{
    fontSize: 20,
    top: 60,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  costInput:{
    fontSize: 20,
    top: 100,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  spotInput:{
    fontSize: 20,
    top: 140,
    left: 25,
    borderBottomColor: GRAY.LIGHT,
    borderBottomWidth: 1,
  },
  contentInput:{
    fontSize: 20,
    top: 200,
    left: 25,
  },
});
