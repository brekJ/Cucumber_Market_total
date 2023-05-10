import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { GREEN, WHITE, DANGER } from '../colors';
import { userMade, categoryMade, postMade } from '../functions/Setting';
import { Routes } from '../navigations/routes';
import { useEffect } from 'react';

const MainScreen = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    categoryMade()
  },[])

  return (
    <LinearGradient
      colors={[GREEN.START_GREEN, GREEN.END_GREEN]}
      style={styles.background}
    >
      <SafeAreaView />
      <View style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: GREEN.START_GREEN }]}>
            오 이{' '}
          </Text>
          <Text style={[styles.title, { color: WHITE }]}>마 켓</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 40, color: GREEN.END_GREEN }}>
            오늘은 이{' '}
          </Text>
          <Text style={{ fontSize: 40, color: GREEN.START_GREEN }}>
            가격 어때 ?
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/mainIcon.png')}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={{ alignItems: 'center' }}
            onPress={() => {
              navigation.navigate(Routes.SIGN_UP_SCREEN);
            }}
          >
            <Text style={{ fontSize: 24, color: WHITE }}>시작하기</Text>
          </Pressable>
        </View>
        <View style={styles.textButtonContainer}>
          <Text style={{ fontSize: 24 }}>계정이 있다면 </Text>
          <Pressable
            onPress={() => {
              navigation.navigate(Routes.SIGN_IN_SCREEN);
            }}
            style={{ justifyContent: 'center' }}
          >
            <Text style={{ color: GREEN.START_GREEN, fontSize: 24 }}>
              로그인
            </Text>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            //categoryMade();
            userMade(4);
            postMade();
          }}
        >
          <Text style={{ fontSize: 24, color: DANGER.DEFAULT }}>dummySet</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

MainScreen.propTypes = {
  navigation: propTypes.object,
};
export default MainScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  title: {
    fontSize: 64,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: GREEN.START_GREEN,
    width: 320,
    height: 80,
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  textButtonContainer: {
    flexDirection: 'row',
  },
});
