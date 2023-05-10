import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyPostItem from '../../components/MyPostItem';
import { Routes } from '../../navigations/routes';
import { posts } from '../../../dummy/post.json';
import { WHITE } from '../../colors';
const PurchaseLogScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={posts}
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

export default PurchaseLogScreen;
