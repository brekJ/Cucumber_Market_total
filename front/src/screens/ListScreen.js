import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Routes } from '../navigations/routes';
import { getPosts } from '../functions/CRUDFunctions';
import { useSelector, useDispatch } from 'react-redux';
import { setListItems } from '../redux/ListSlice';
import { GREEN, WHITE } from '../colors';
import { FAB } from '@rneui/themed';
import PostListHeader from '../components/PostListHeader';
import MyPostItem from '../components/MyPostItem';

const ListScreen = ({ navigation }) => {
  //
  const [refreshing, setRefreshing] = useState(false);

  const getRefreshData = async () => {
    setRefreshing(true);
    await getPosts()
      .then((posts) => {
        dispatch(setListItems(posts));
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

  const listItems = useSelector((state) => state.List.listItems);

  const { top, bottom } = useSafeAreaInsets();

  useEffect(() => {
    getPosts()
      .then((posts) => {
        dispatch(setListItems(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}>
      <PostListHeader navigation={navigation} />
      <View style={styles.listContainer}>
        <FlatList
          onRefresh={onRefresh}
          refreshing={refreshing}
          data={listItems}
          renderItem={({ item }) => {
            return (
              <MyPostItem post={item} />
              /*<PostListItem
                icon
                title={item.item.postTitle}
                price={item.item.postCost}
                // imgUrl={'https://randomuser.me/api/portraits/men/36.jpg'}
                onPress={() => {
                  getPost(item.item.postID)
                    .then((post) => {
                      navigation.navigate(Routes.DETAIL_ITEM_SCREEN, {
                        id: post.postID,
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />*/
            );
          }}
          //keyExtractor={(item, index) => index}
        ></FlatList>
      </View>
      <FAB
        style={styles.FAB}
        icon={{ name: 'add', color: 'white' }}
        color={GREEN.START_GREEN}
        onPress={() => navigation.navigate(Routes.NEW_ITEM_SCREEN)}
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
