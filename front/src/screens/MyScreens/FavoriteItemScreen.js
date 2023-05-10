import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyPostItem from '../../components/MyPostItem';
import { WHITE } from '../../colors';
import { useSelector } from 'react-redux';
import { FavoritePostList } from '../../functions/PostList';
const FavoriteItemScreen = () => {
  const navigation = useNavigation();
  const listItems = useSelector((state) => state.List.listItems);
  const loginUser = useSelector(state=>state.User.loginUser) 
  const favoritePost = FavoritePostList(listItems, loginUser)

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={favoritePost}
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

export default FavoriteItemScreen;
