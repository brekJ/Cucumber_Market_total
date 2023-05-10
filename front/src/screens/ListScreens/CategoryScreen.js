import { Text } from "@rneui/base";
import { View,StyleSheet, useWindowDimensions, FlatList } from "react-native";
import { Icon } from "react-native-elements";

const CategoryScreen= () => {
    const categories = ['인기매물', '디지털기기', '생활가전', '가구/인태리어', '생활/주방', '유아동', '유아도서', '여성의류', '여성잡화',
'남성패션/잡화', '뷰티/미용', '스포츠/레저', '취미/게임/음반', '중고차', '도서', '티켓/교환권', '가공식품', '반려동물용품', '식물', '기타 중고물품']
const width = useWindowDimensions().width / 4;
    return(
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categories}
        renderItem={({ item }) => (
          <View style={[{width:width,height:width}, styles.item]}>
            <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'/>
            <Text>{item}</Text>
          </View>
        )}
        numColumns={4}
      />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      width: '100%',
    },
    item: {
    justifyContent: 'center',
    alignItems: 'center',
    },
  });
  
  export default CategoryScreen;