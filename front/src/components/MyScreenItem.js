//MyScreen에 사용
import { Pressable, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { updateUser } from '../functions/CRUDFunctions';
import { useSelector } from 'react-redux';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

const MyScreenItem = ({ route, iconName, iconType, color, title }) => {
  const navigation = useNavigation();

  let loginUser = useSelector((state) => state.User.loginUser);
  //yyyy-mm-dd hh:mm:ss

  const createUserFd = (user) => {
    const formdata = new FormData();
    formdata.append('userTableID', user.userTableID);
    formdata.append('userID', user.userID);
    formdata.append('password', user.password);
    formdata.append('phoneNumber', user.phoneNumber);
    formdata.append('statuss', 0);
    formdata.append(
      'created',
      new Date(new Date(user.created).getTime() + TIME_ZONE)
        .toISOString()
        .replace('T', ' ')
        .slice(0, -5)
        .toString()
    );
    formdata.append(
      'updated',
      new Date(new Date(user.created).getTime() + TIME_ZONE)
        .toISOString()
        .replace('T', ' ')
        .slice(0, -5)
        .toString()
    );
    formdata.append('userImage', user.userImage);
    formdata.append('userName', user.userName);
    formdata.append('favoritePostID', user.favoritePostID);
    return formdata;
  };

  const logOutHandler = () => {
    if (title === '로그아웃') {
      const fd = createUserFd(loginUser);
      updateUser(loginUser.userTableID, fd)
        .then((res) => {
          if (res !== '' && res !== undefined) {
            navigation.reset({
              index: 0,
              routes: [{ name: route }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigation.navigate(route);
    }
  };

  return (
    <Pressable onPress={logOutHandler}>
      <ListItem>
        <Icon name={iconName} type={iconType} color={color} />
        <ListItem.Content>
          <ListItem.Title style={styles.listItem}>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 20,
  },
});

export default MyScreenItem;
