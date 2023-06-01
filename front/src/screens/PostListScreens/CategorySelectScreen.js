import { Text } from '@rneui/base';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { WHITE } from '../../colors';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryValue } from '../../redux/CategorySlice';

const CategorySelectScreen = ({ route }) => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width / 4;
  const stateRoutes = useNavigationState((state) => state.routes);
  const prevScreenName = stateRoutes[stateRoutes.length - 2].name;
  const post = route.params.post;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.flatList}>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(1));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 1,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/1.png')}
            style={styles.image}
          />
          <Text>{'인기매물'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(2));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 2,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/2.png')}
            style={styles.image}
          />
          <Text>{'디지털기기'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(3));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 3,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/3.png')}
            style={styles.image}
          />
          <Text>{'생활가전'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(4));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 4,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/4.png')}
            style={styles.image}
          />
          <Text>{'가구/인테리어'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(5));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 5,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/5.png')}
            style={styles.image}
          />
          <Text>{'생활/주방'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(6));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 6,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/6.png')}
            style={styles.image}
          />
          <Text>{'유아동'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(7));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 7,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/7.png')}
            style={styles.image}
          />
          <Text>{'유아도서'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(8));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 8,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/8.png')}
            style={styles.image}
          />
          <Text>{'여성의류'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(9));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 9,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/9.png')}
            style={styles.image}
          />
          <Text>{'여성잡화'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(10));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 10,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/3.png')}
            style={styles.image}
          />
          <Text>{'남성패션/잡화'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(11));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 11,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/11.png')}
            style={styles.image}
          />
          <Text>{'뷰티/미용'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(12));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 12,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/12.png')}
            style={styles.image}
          />
          <Text>{'스포츠/레저'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(13));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 13,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/13.png')}
            style={styles.image}
          />
          <Text style={{ fontSize: 13 }}>{'취미/게임/음반'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(14));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 14,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/14.png')}
            style={styles.image}
          />
          <Text>{'중고차'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(15));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 15,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/15.png')}
            style={styles.image}
          />
          <Text>{'도서'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(16));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 16,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/16.png')}
            style={styles.image}
          />
          <Text>{'티켓/교환권'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(17));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 17,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/17.png')}
            style={styles.image}
          />
          <Text>{'가공식품'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(18));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 18,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/18.png')}
            style={styles.image}
          />
          <Text>{'반려동물용품'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(19));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 19,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/19.png')}
            style={styles.image}
          />
          <Text>{'식물'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {
            dispatch(setCategoryValue(20));
            navigation.navigate(prevScreenName, {
              selectedCategoryID: 20,
              post: post,
            });
            
          }}
        >
          <Image
            source={require('../../../assets/images/20.png')}
            style={styles.image}
          />
          <Text>{'기타 중고물품'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  flatList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  categoryItem: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default CategorySelectScreen;