import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Image,
  Pressable,
} from 'react-native';
import { WHITE, BLACK } from '../colors';
import { memo } from 'react';
import { getPost } from '../functions/CRUDFunctions';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigations/routes';


const MyPostItem = memo(({ post }) => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width;
  const height = width / 5;

  return (
    <View>
      <Pressable
        onPress={() => {
          getPost(post.postID)
            .then((post) => {
              navigation.navigate(Routes.DETAIL_ITEM_SCREEN, {
                id: post.postID,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <View style={[{ width, height: height + 40 }, styles.container]}>
          {post.postImage === null ? (
            <Image
              style={[{ width: width / 5, height: height }, styles.img]}
              source={require('../../assets/icon.png')}
            />
          ) : (
            <Image
              style={[{ width: width / 5, height: height }, styles.img]}
              source={post.postImage}
            />
          )}
          <View style={[styles.texts,{width:width}]}>
          <Text style={{ fontSize: 15, flexWrap:'wrap',width:width*4/5-20,paddingRight:10}} numberOfLines={3}>{post.postTitle}</Text>
            <Text style={{fontSize: 16 }}>{post.postCost + ' 원'}</Text>
            {post.postDealDone === true ? (
              <Text style={styles.done}>거래완료</Text>
            ) : (
              <Text />
            )}
          </View>
        </View>
      </Pressable>
    </View>
  );
});

MyPostItem.displayName = 'MyPostItem';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    // alignItems:'flex-start',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingLeft: 10,
    paddingRight: 5,
    // paddingTop: 10,
    // paddingBottom: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderBottomColor: BLACK,
    borderTopColor: BLACK,
    flexDirection: 'row',
  },
  img: { borderColor: BLACK, borderWidth: 0.5 },
  done: {
    width: 60,
    padding: 5,
    backgroundColor: BLACK,
    color: WHITE,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  texts: {
    marginLeft: 10,
    
  },
});

export default MyPostItem;
