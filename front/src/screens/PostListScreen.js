import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Routes } from '../navigations/routes';
import { getPosts } from '../functions/CRUDFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { setPostListItems } from '../redux/PostListSlice';
import { GREEN, WHITE } from '../colors';
import { FAB } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import PostListHeader from '../components/PostListHeader';
import MyPostItem from '../components/MyPostItem';

const ListScreen = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const getRefreshData = async () => {
    setRefreshing(true);
    getPosts()
      .then((posts) => {
        dispatch(setPostListItems(posts));
      })
      .catch((error) => {
        console.log(error);
      });
    setRefreshing(false);
  };

  const onRefresh = () => {
    if (!refreshing) {
      getRefreshData();
    }
  };
  //
  const dispatch = useDispatch();

  const listItems = useSelector((state) => state.PostList.postListItems);

  const { top, bottom } = useSafeAreaInsets();

  useEffect(() => {
    getPosts()
      .then((posts) => {
        dispatch(setPostListItems(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={[styles.root, { paddingTop: top }]}>
      <PostListHeader navigation={navigation} />
      <View style={styles.listContainer}>
        <FlatList
          onRefresh={onRefresh}
          refreshing={refreshing}
          data={listItems}
          renderItem={({ item }) => {
            return <MyPostItem post={item} />;
          }}
        ></FlatList>
      </View>
      <FAB
        style={styles.FAB}
        icon={{ name: 'add', color: 'white' }}
        color={GREEN.START_GREEN}
        onPress={() =>
          navigation.navigate(Routes.NEW_ITEM_SCREEN, { selectedCategoryID: 0 })
        }
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  listContainer: {
    flex: 20,
  },
  FAB: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
