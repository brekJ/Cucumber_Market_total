import { StyleSheet, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { createUser, checkUserID } from '../functions/CRUDFunctions';
import { Routes } from '../navigations/routes';
import { GREEN } from '../colors';
import { useDispatch } from 'react-redux';
import { setLoginUser } from '../redux/UserSlice';

const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { top, bottom } = useSafeAreaInsets();

  const date = new Date();
  let currentTime = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5)
    .toString();

  const [userName, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);

  const createUserFd = () => {
    const formdata = new FormData();
    formdata.append('userID', userID);
    formdata.append('userName', userName);
    formdata.append('password', password);
    formdata.append('created', currentTime);
    formdata.append('updated', currentTime);
    formdata.append('statuss', 1);
    return formdata;
  };

  const onCheckDuplicateHandler = async () => {
    checkUserID(userID)
      .then((res) => {
        console.log(res);
        setValid(true);
      })
      .catch((err) => {
        console.log(err);
        setValid(false);
      });
  };

  const onSubmitUserInfoHandler = () => {
    if (userName !== '' && userID !== '' && password !== '' && valid) {
      createUser(createUserFd())
        .then((res) => {
          console.log(res);
          if (res !== '' && res !== undefined) {
            dispatch(setLoginUser(res));
            navigation.reset({
              index: 0,
              routes: [{ name: Routes.CONTENT_TAB }],
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View style={[{ paddingTop: top, paddingBottom: bottom }, styles.root]}>
      <View style={{ marginHorizontal: 10 }}>
        <Input
          placeholder="이름 입력"
          onChangeText={(text) => {
            setUsername(text);
          }}
          errorStyle={{ color: 'red' }}
          errorMessage={userName !== '' ? '' : '필수 입력 항목입니다.'}
        />
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <Input
          containerStyle={{ flex: 3 }}
          placeholder="아이디 입력"
          onChangeText={(text) => {
            setUserID(text);
          }}
          errorStyle={{ color: 'red' }}
          errorMessage={userID !== '' ? '' : '필수 입력 항목입니다.'}
        />
        <Button
          buttonStyle={{ backgroundColor: GREEN.START_GREEN }}
          containerStyle={{ flex: 1 }}
          title={'중복확인'}
          onPress={onCheckDuplicateHandler}
        />
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Input
          placeholder="패스워드 입력"
          onChangeText={(text) => {
            setPassword(text);
          }}
          errorStyle={{ color: 'red' }}
          errorMessage={password !== '' ? '' : '필수 입력 항목입니다.'}
          secureTextEntry={true}
        />
      </View>
      <Button
        type="solid"
        title="계정 생성"
        buttonStyle={{
          paddingVertical: 15,
          backgroundColor: GREEN.START_GREEN,
        }}
        containerStyle={{
          marginHorizontal: 40,
          marginTop: 20,
          borderRadius: 10,
        }}
        onPress={onSubmitUserInfoHandler}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
