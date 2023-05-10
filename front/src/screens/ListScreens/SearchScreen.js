import { View, StyleSheet } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { WHITE } from '../../colors';
import SafeInputView from '../../components/SafeInputView';

function SearchScreen() {
  return (
    <SafeInputView>
      <View style={styles.root}>
        <View style={styles.searchTextInputContainer}>
          <View style={{ flex: 8 }}>
            <Input placeholder="검색어 입력" />
          </View>
          <View style={{ flex: 2 }}>
            <Button title={'검색'} />
          </View>
        </View>
        <View style={styles.listContainer}></View>
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
  },
  listContainer: {
    flex: 20,
  },
  searchResultContainer: {
    flex: 9,
  },
});
