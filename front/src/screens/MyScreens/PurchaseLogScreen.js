import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WHITE } from '../../colors';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getChatRooms } from '../../functions/CRUDFunctions';
import MyPostItem from '../../components/MyPostItem';

const PurchaseLogScreen = () => {
  const loginUser = useSelector((state) => state.User.loginUser);

  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    getChatRooms(loginUser.userTableID).then((res) => {
      const posts = res.map((room) => {
        if (room.buyerUser.userTableID === loginUser.userTableID) {
          return room.post;
        } else {
          return;
        }
      });
      setListItems(posts);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={listItems}
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
