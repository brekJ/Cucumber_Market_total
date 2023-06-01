import { Text } from "@rneui/base";
import { View,StyleSheet, useWindowDimensions, FlatList, TouchableOpacity, Pressable,Image } from "react-native";
import { categories } from "../../functions/Setting";
import { WHITE } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../navigations/routes";

const CategoryScreen= () => {
  const navigation = useNavigation();
  const width = useWindowDimensions().width / 4;

return (
  <View style={styles.container}>
    <View style={styles.flatList}>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
            onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 1})}}>
            <Image source={require('../../../assets/images/1.png')} style={styles.image} />
              <Text>{'인기매물'}</Text>
            </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 2})}}>
          <Image source={require('../../../assets/images/2.png')} style={styles.image} />
            <Text>{'디지털기기'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 3})}}>
          <Image source={require('../../../assets/images/3.png')} style={styles.image} />
            <Text>{'생활가전'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 4})}}>
          <Image source={require('../../../assets/images/4.png')} style={styles.image} />
            <Text>{'가구/인테리어'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 5})}}>
          <Image source={require('../../../assets/images/5.png')} style={styles.image} />
            <Text>{'생활/주방'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 6})}}>
          <Image source={require('../../../assets/images/6.png')} style={styles.image} />
            <Text>{'유아동'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 7})}}>
          <Image source={require('../../../assets/images/7.png')} style={styles.image} />
            <Text>{'유아도서'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 8})}}>
          <Image source={require('../../../assets/images/8.png')} style={styles.image} />
            <Text>{'여성의류'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 9})}}>
          <Image source={require('../../../assets/images/9.png')} style={styles.image} />
            <Text>{'여성잡화'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 10})}}>
          <Image source={require('../../../assets/images/3.png')} style={styles.image} />
            <Text>{'남성패션/잡화'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 11})}}>
          <Image source={require('../../../assets/images/11.png')} style={styles.image} />
            <Text>{'뷰티/미용'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 12})}}>
          <Image source={require('../../../assets/images/12.png')} style={styles.image} />
            <Text>{'스포츠/레저'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 13})}}>
          <Image source={require('../../../assets/images/13.png')} style={styles.image} />
            <Text style={{fontSize:13}}>{'취미/게임/음반'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 14})}}>
          <Image source={require('../../../assets/images/14.png')} style={styles.image} />
            <Text>{'중고차'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 15})}}>
          <Image source={require('../../../assets/images/15.png')} style={styles.image} />
            <Text>{'도서'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 16})}}>
          <Image source={require('../../../assets/images/16.png')} style={styles.image} />
            <Text>{'티켓/교환권'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 17})}}>
          <Image source={require('../../../assets/images/17.png')} style={styles.image} />
            <Text>{'가공식품'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 18})}}>
          <Image source={require('../../../assets/images/18.png')} style={styles.image} />
            <Text>{'반려동물용품'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 19})}}>
          <Image source={require('../../../assets/images/19.png')} style={styles.image} />
            <Text>{'식물'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.categoryItem, { width: width, height: width }]}
          onPress={() => {navigation.navigate(Routes.CATEGORY_POSTLIST_SCREEN, {selectedCategoryID: 20})}}>
          <Image source={require('../../../assets/images/20.png')} style={styles.image} />
            <Text>{'기타 중고물품'}</Text>
          </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor:WHITE
},
flatList:{
  flexDirection: 'row',
  flexWrap:'wrap',
  justifyContent: 'space-evenly',
},
categoryItem: {
  padding: 10,
  justifyContent:'center',
  alignItems:'center',
  
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

  
  export default CategoryScreen;