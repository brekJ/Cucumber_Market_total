import { View, StyleSheet, FlatList } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { WHITE, GREEN } from '../../colors';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getPostsByPostTitle } from '../../functions/CRUDFunctions';
import MyPostItem from '../../components/MyPostItem';
import SafeInputView from '../../components/SafeInputView';

function SearchScreen() {
  const { top, bottom } = useSafeAreaInsets();

  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);

  const onPressSearchHandler = () => {
    getPostsByPostTitle(searchText).then((res) => {
      setListItems(res);
    });
  };

  return (
    <SafeInputView>
      <View style={[{ paddingTop: top, paddingBottom: bottom }, styles.root]}>
        <View style={styles.searchTextInputContainer}>
          <View style={{ flex: 8 }}>
            <Input
              placeholder="검색어 입력"
              onChangeText={(text) => {
                setSearchText(text);
              }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Button
              buttonStyle={{ backgroundColor: GREEN.START_GREEN }}
              title={'검색'}
              onPress={onPressSearchHandler}
            />
          </View>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={listItems}
            renderItem={({ item }) => {
              return <MyPostItem post={item} />;
            }}
          ></FlatList>
        </View>
      </View>
    </SafeInputView>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  searchTextInputContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  listContainer: {
    flex: 20,
  },
  searchResultContainer: {
    flex: 9,
  },
});
