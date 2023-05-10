import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyPostItem from '../../../components/MyPostItem';
import { WHITE } from '../../../colors';
import { useSelector } from 'react-redux';
import { MyDealFalsePostList } from '../../../functions/PostList';
const DealPurchaseScreen = () => {
  const navigation = useNavigation();
  const listItems = useSelector((state) => state.List.listItems);
  const loginUser = useSelector((state) => state.User.loginUser);
  const MyDealFalsePost = MyDealFalsePostList(listItems, loginUser);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={MyDealFalsePost}
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

export default DealPurchaseScreen;
