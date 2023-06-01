import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyPostItem from '../../../components/MyPostItem';
import { Routes } from '../../../navigations/routes';
import { posts } from '../../../../dummy/post.json';
import { WHITE } from '../../../colors';
import { MyDealDonePostList } from '../../../functions/PostList';
import { useSelector } from 'react-redux';

const DealEndScreen = () => {
  const navigation = useNavigation();
  const listItems = useSelector((state) => state.PostList.postListItems);
  const loginUser = useSelector((state) => state.User.loginUser);
  const MyDealDonePost = MyDealDonePostList(listItems, loginUser);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={MyDealDonePost}
          renderItem={({ item }) => {
            return <MyPostItem post={item} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItem: 'flex-start',
    backgroundColor: WHITE,
  },
});

export default DealEndScreen;
