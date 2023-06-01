import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Routes } from '../../navigations/routes';
import { GREEN, WHITE } from '../../colors';
import PostListHeader from '../../components/PostListHeader';
import MyPostItem from '../../components/MyPostItem';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getPostsByCategory } from '../../functions/CRUDFunctions';

const CategoryPostListScreen = ({ route }) => {
  const navigation = useNavigation();
  const [listItems, setListItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getRefreshData = async () => {
    setRefreshing(true);
    getPostsByCategory(route.params.selectedCategoryID)
      .then((posts) => {
        setListItems(posts);
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

  const { top, bottom } = useSafeAreaInsets();

  useEffect(() => {
    getPostsByCategory(route.params.selectedCategoryID)
      .then((posts) => {
        setListItems(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={[styles.root]}>
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
    </View>
  );
};

export default CategoryPostListScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  listContainer: {
    flex: 20,
  },
});
