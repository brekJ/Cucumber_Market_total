import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input, Image } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Routes } from '../navigations/routes';
import { useState } from 'react';
import { checkUserInfo } from '../functions/CRUDFunctions';
import { GREEN, WHITE } from '../colors';
import { useDispatch } from 'react-redux';
import { setLoginUser } from '../redux/UserSlice';

const SignInScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { top, bottom } = useSafeAreaInsets();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitUserInfoHandler = () => {
    checkUserInfo(userId, password)
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
  };

  return (
    <LinearGradient
      colors={[GREEN.START_GREEN, GREEN.END_GREEN]}
      style={[{ paddingTop: top, paddingBottom: bottom }, styles.background]}
    >
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/images/mainIcon.png')}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          ></Image>
          <View style={{ width: '80%' }}>
            <Input
              placeholder="아이디 입력"
              onChangeText={(text) => {
                setUserId(text);
              }}
            ></Input>
          </View>
          <View style={{ width: '80%' }}>
            <Input
              placeholder="패스워드 입력"
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry
            ></Input>
          </View>
          <Button
            buttonStyle={{ backgroundColor: GREEN.START_GREEN }}
            title={'로그인'}
            onPress={onSubmitUserInfoHandler}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: WHITE,
  },
});
