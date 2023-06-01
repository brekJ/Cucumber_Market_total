import { View, StyleSheet } from 'react-native';
import { Routes } from '../navigations/routes';
import { Icon } from '@rneui/themed';

const PostListHeader = ({ navigation }) => {
  return (
    <View style={styles.heading}>
      <Icon
        name="view-headline"
        onPress={() => {
          navigation.navigate(Routes.CATEGORY_SCREEN);
        }}
      />
      <Icon
        name="search"
        onPress={() => navigation.navigate(Routes.SEARCH_SCREEN)}
      />
    </View>
  );
};

export default PostListHeader;

const styles = StyleSheet.create({
  heading: { flexDirection: 'row-reverse', paddingHorizontal: 12 },
});
