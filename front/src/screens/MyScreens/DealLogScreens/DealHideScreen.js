import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyPostItem from '../../../components/MyPostItem';
import { Routes } from '../../../navigations/routes';
import { posts } from '../../../../dummy/post.json';
import { WHITE } from '../../../colors';
const DealHideScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        {/*<FlatList
          data={posts}
          renderItem={({ item }) => {
            return <MyPostItem post={item} />;
          }}
        />*/}
        <Text style={{fontSize : 20}}>숨긴 게시글이 없어요.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
});

export default DealHideScreen;
