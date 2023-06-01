import * as React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Text,Button, Dimensions, StyleSheet, TextInput, TouchableOpacity, View, FlatList, Pressable } from "react-native";
import { useState } from 'react';
import { BLACK, GRAY, GREEN, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getPost, getPostsByTitleContent } from '../functions/CRUDFunctions';
import { useEffect } from 'react';
import { Routes } from '../navigations/routes';
import { Circle } from 'react-native-svg';

const screenWidth = Dimensions.get("window").width;

const ChartScreen = () =>{
  const navigation = useNavigation();
const stateRoutes = useNavigationState((state) => state.routes);
const prevScreenName = stateRoutes[stateRoutes.length - 2].name;
const { top, bottom } = useSafeAreaInsets();
const [items, setItems] = useState([]);
const [sorted, setSorted] = useState([]);

  const [text, setText] = useState('');
  const [data, setData] = useState(null); 
  const searchSubmit = async (text) => {
    getPostsByTitleContent(text)
      .then((posts) => {
        setItems(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setData([]);
    
    const extractLatestData = (sortedData) => {
      const latestData = sortedData
        .sort((a, b) => {
          const updatedA = new Date(a.updated);
          const updatedB = new Date(b.updated);
          return updatedB - updatedA;
        })
        .slice(0, 7)
        .map(item => {
          const dateString = item.updated.split('T')[0];
          const updated = dateString.slice(5);
          const postCost = item.postCost;
          return { updated, postCost };
        });
      return latestData;
    };
    
    const sortData = () => {
      const sortedData = [...items].sort((a, b) => {
        const updatedA = new Date(a.updated);
        const updatedB = new Date(b.updated);
        return updatedB - updatedA;
      });
      return sortedData;
    };
    
    const sortedData = sortData();
    const latestData = extractLatestData(sortedData);
    
    
    setSorted(sortedData);

    latestData.reverse();
    const labels = latestData.map(item => item.updated);
    const dataset = {
      data: latestData.map(item => item.postCost),
      color: (opacity = 1) => `rgba(26, 115, 255, ${opacity})`,
      strokeWidth: 2
    };

  const willUseData = {
    labels: labels,
    datasets: [dataset],
    legend: ['최근가격 7개']
  };

  setData(willUseData);
}, [items]);
/*const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };*/
  const chartConfig = {
    backgroundGradientFrom: WHITE,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#2f734e",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  const renderItem = ({ item }) => (
    <Pressable
    style={styles.itemContainer}
        onPress={() => {
          getPost(item.postID)
            .then((post) => {
              navigation.navigate(Routes.DETAIL_ITEM_SCREEN, {
                id: post.postID,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <View style={styles.itemContent}>
    <View style={styles.item}>
      <Text style={styles.title}
      ellipsizeMode='tail'
      numberOfLines={1}>{item.postTitle}</Text>
      <Text style={styles.price}>{item.postCost}원</Text>
    </View>
    <View>
      <Text style={[styles.content, {padding: 10, paddingRight:20}]}
      ellipsizeMode='tail'
      numberOfLines={2}>
        {item.postContent}</Text>
    </View>
    </View>
    </Pressable>
  );

  return(
    <View style={[{paddingTop: top, paddingBottom: bottom},styles.root]}>
      <View style={styles.inputButton}>
        <TouchableOpacity style={{width:30, height:50, justifyContent:'center', alignItems:'center',marginRight:5,marginLeft:10}}
        onPress={() => navigation.goBack()} >
        <MaterialCommunityIcons
        name="arrow-left"
        size={34}
        color={GREEN.START_GREEN}
      />
        </TouchableOpacity>
    <TextInput
    style={styles.textInput}
        placeholder="원하는 키워드를 입력하세요."
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
      />
      <TouchableOpacity 
      style={[
        {
          width: 30,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
          marginLeft: 5,
        },
        
      ]}
      onPress={()=>{searchSubmit(text);}}
      disabled={!text}>
        <MaterialCommunityIcons
        name="check"
        size={34}
        color={text ? GREEN.START_GREEN : GRAY.LIGHT}
      />
        </TouchableOpacity>
      </View>
      {data && data.datasets && data.datasets[0].data.length > 0 ? (
         <>
         <LineChart
  data={data}
  width={screenWidth}
  height={330}
  chartConfig={{
    backgroundGradientFrom: WHITE,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#F0F8FF",
    backgroundGradientToOpacity: 0.8,
    color: (opacity = 1) => `rgba(82, 115, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
    
  propsForHorizontalLabels: {
    dx: -12,
    dy: 0,
    fontSize: 10,
  },
  }}
  bezier
  style={styles.chart}
  withHorizontalLabels={true}
  withHorizontalLines={true}
  withVerticalLines={true}
  renderDotContent={({ x, y, index }) => (
    <View key={index} style={[styles.dotLabel, { left: x - 25, top: y + 25 }]}>
      <Text style={styles.dotLabelText}>{data.datasets[0].data[index]}원</Text>
    </View>
  )}
  propsForDots={{
    r: "8",
    strokeWidth: "2",
    stroke: "#1A73FF",
  }}
  propsForLabels={{
    dy: -12,
    fontSize: 12,
    fill: "#525252",
    fontWeight: "bold",
    textAnchor: "middle",
  }}
/>
<View style={styles.textContainer}>
  <View style={[{flexDirection:'column'}]}>
  <View style={styles.titleItem}>
    <Text style={styles.titleText}>글 제목</Text>
    </View>
    <View style={styles.titleItem}>
    <Text style={styles.costText}>가격</Text>
    </View>
    </View>
  <View style={styles.contentItem}>
    <Text style={styles.contentText}>글 내용</Text>
  </View>
</View>
  <FlatList
            data={sorted}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </>
) : (
  <View style={styles.emptyChartBackground}>
    <Text>검색어를 입력하세요.</Text>
  </View>
)}
</View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  inputButton:{
    flexDirection: 'row',
  flexWrap:'wrap',
  justifyContent: 'space-evenly',
  },
  textInput: {
    width: screenWidth-90,
    height: 50,
    fontSize:20,
  },
  emptyChartBackground: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  item: {
    width:'40%',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: GRAY.LIGHT,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    flexShrink: 1,
    numberOfLines: 1,
    ellipsizeMode: 'tail',
  },
  price: {
    fontSize: 14,
    color: GRAY.DARK,
    overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  },
  itemContainer:{
    borderTopColor:GRAY.DARK,
    borderTopWidth:1,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: screenWidth - 100,
  },
  content: {
    fontSize: 14,
    color: GRAY.DARK,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },  
  chart: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#F0F8FF',
    marginBottom:0,
    paddingBottom:0,
  },
  dotLabel: {
  position: 'absolute',
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 8,
  fontSize: 12,
  fontWeight: 'bold',
  color: '#525252',
},
dotLabelText:{
  fontSize:10,
},
textContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin:0,
  paddingBottom:2,
},
titleItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10,
},
contentItem: {
  justifyContent:'center',
  alignItems: 'flex-end',
  marginRight: 10,
},
titleText: {
  fontWeight: 'bold',
},
contentText: {
  textAlignVertical: 'center',
  textAlign: 'right',
},
costText:{
  color:GRAY.DARK,
},
})

export default ChartScreen;