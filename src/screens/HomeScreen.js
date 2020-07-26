import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList
 } from "react-native";

 import imgLevel from "../res/image/level_bkg.png"
 import imgProgressbar from "../res/image/progressbar.png"
 import imgPoint from "../res/image/point_bkg.png"
 import imgTopbar from "../res/image/topbar.png"
 import imgBottombar from "../res/image/bottombar.png"
 import imgArrowLeft from "../res/image/arrow_left.png"
 import imgArrowRight from "../res/image/arrow_right.png"
 import imgTagNormal from "../res/image/tag_bkg_nor.png"
 import imgTagFocus from "../res/image/tag_bkg_fcs.png"
import Swiper from 'react-native-swiper'
import * as Progress from 'react-native-progress';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const logHeight = DEVICE_WIDTH*866/1920;

export default class HomeScreen extends Component {
// class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images : [
        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},
        
        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},

        { url: "http://dresshouse.it/20228-large_default/maksikleit-maxi0665-2.jpg", name: "woman" },
        { url: "http://dresshouse.it/20195-large_default/maksikleit-maxi0665-3.jpg",name: "woman" },
        { url: "http://dresshouse.it/19882-large_default/maksikleit-maxi0630-3.jpg"},
        { url: "http://dresshouse.it/19765-large_default/maksikleit-maxi0636-4.jpg",},
        { url: "http://dresshouse.it/20590-large_default/kleit-klt1561-3.jpg", name:"shakira" },
        { url: "http://dresshouse.it/15692-large_default/kleit-klt1561-1.jpg", name: "cat" },
        { url: "http://dresshouse.it/20187-large_default/maksikleit-maxi0664-2.jpg", name: "baby" },
        { url: "http://dresshouse.it/13931-large_default/maksikleit-maxi0204-1.jpg"},
        { url: "http://dresshouse.it/7455-large_default/maksikleit-maxi0087-8.jpg"},
      ],
      currentIndex: 0,
      btnTags: [{tagid: '0', pressed: false}, {tagid: '1', pressed: false}, {tagid: '2', pressed: false}, {tagid: '3', pressed: false},
                {tagid: '4', pressed: false}, {tagid: '5', pressed: false}, {tagid: '6', pressed: false}, {tagid: '7', pressed: false},
                {tagid: '8', pressed: false}, {tagid: '9', pressed: false}, {tagid: '10', pressed: false}, {tagid: '11', pressed: false},
                {tagid: '12', pressed: false}, {tagid: '13', pressed: false}, {tagid: '14', pressed: false}, {tagid: '15', pressed: false},
      ],
      numColumns: 4,
      total: 0,
    };
  }

  componentDidMount(){
    this.setState({total: this.state.images.length})
  }

  static navigationOptions = {
    header: null,
  }

  onPressOrder = (item, index) => {
    const {btnTags} = this.state;
    console.log('pressed! = ', index);
    let tempItem = {
      ...item,
      pressed: !item.pressed
    }
    let newBtnTags = [];
    btnTags.forEach(element => {
      if (element.tagid != item.tagid)
        newBtnTags.push(element)
      else
        newBtnTags.push(tempItem)
    });
    this.setState({btnTags: newBtnTags});
    console.log(newBtnTags);
  };

  // Handled swipe position change
  screenChange = index => {
    console.log("index when change :=> ", index);
    this.setState({ currentIndex: index });
  };
  
  // Adjust(fill) end item of row in FlatList Grid
  formatData = (data, numColumns) => {
    let tempData = {
      tagid: 'none',
      empty: true
    }

    const numberOfFullRows = Math.floor(data.length/numColumns);
    let numberOfElementsLastRow = data.length-(numberOfFullRows*numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push(tempData);
      numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
  }

  renderItem = ({ item, index }) => {
    if(item.empty === true) {
      return (
      <View style={[styles.itemInvisible, styles.tagGroup1]}>
         
      </View>
      )
    }
    return (
        <View style={styles.tagGroup1}>
          <View style={styles.tagGroup}>
            <TouchableOpacity style={styles.tagItem} onPress={() => this.onPressOrder(item, index)}>
                {!item.pressed ?
                  <Image
                    style={styles.imgTagBkg}
                    source={imgTagNormal}
                  />
                :
                  <Image
                      style={styles.imgTagBkg}
                      source={imgTagFocus}
                    />
                }
                
                <Text style={styles.textTag}>
                  TAGS
                </Text>
            </TouchableOpacity>
          </View>
      </View>
      )
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.levelItem}>
            <View style={styles.levelValueItem}>
              <Image
                style={styles.imgLevel} // must be passed from the parent, the number may vary depending upon your screen size
                source={imgLevel}
              />
              <Text style={styles.textLevelValue}>
                1
              </Text>
            </View>
            <Text style={styles.textLevel}>
              TRUST LVL
            </Text>
          </View>

          <View style={styles.progressbarItem}>
            <Progress.Bar useNativeDriver = {true} height = {12} width = {270} progress={(this.state.currentIndex+1)/this.state.total} color={'#ffe1a5'} borderWidth={2} borderColor={'rgba(255,214,116,1)'} borderRadius = {10} style={styles.progressbar} />
            {/* <Image
              style={styles.imgProgressbar} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgProgressbar}
            /> */}
          </View>

          <View style={styles.levelItem}>
            <View style={styles.levelValueItem}>
              <Image
                style={styles.imgPoint} // must be passed from the parent, the number may vary depending upon your screen size
                source={imgPoint}
              />
              <Text style={styles.textLevelValue}>
                1200
              </Text>
            </View>
            <Text style={styles.textLevel}>
              POINTS
            </Text>
          </View>
        </View>

        <Image
          style={styles.imgTopbar} // must be passed from the parent, the number may vary depending upon your screen size
          source={imgTopbar}
        />

        <View style={styles.middleGroup}>
          <View style={styles.arrowLeft}>
            {/* <Image
              style={styles.imgArrow} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgArrowLeft}
            /> */}
          </View>
          <View style={{flex: 12}}>
              <Swiper
                style={styles.wrapper}
                onIndexChanged={(index) => 
                  this.screenChange(index)
                }
                showsPagination={false}
                showsButtons={true}
                nextButton={
                  <Image
                    style={styles.imgArrow} // must be passed from the parent, the number may vary depending upon your screen size
                    source={imgArrowRight}
                  />
                }
                prevButton={
                  <Image
                    style={styles.imgArrow} // must be passed from the parent, the number may vary depending upon your screen size
                    source={imgArrowLeft}
                  />
                }
                // dot={
                //   <View
                //     style={{
                //       backgroundColor: 'rgba(255,0,0,1)',
                //       width: 25,
                //       height: 25,
                //       borderRadius: 4,
                //       marginLeft: 3,
                //       marginRight: 3,
                //       marginTop: 3,
                //       marginBottom: 3
                //     }}
                //   />
                // }
                // activeDot={
                //   <View
                //     style={{
                //       backgroundColor: '#fff',
                //       width: 8,
                //       height: 8,
                //       borderRadius: 4,
                //       marginLeft: 3,
                //       marginRight: 3,
                //       marginTop: -43,
                //       marginBottom: 3
                //     }}
                //   />
                // }

                paginationStyle={{
                  bottom: 0,
                  left: null,
                  right: 10
                }}
                loop={false}
              >
                {this.state.images.map((item, i) => (
                  <View
                    style={styles.slide}
                    // title={
                    //   <Text numberOfLines={0} style={{marginTop: -100, textAlign: "center",  color:'blue'}}>Aussie tourist dies at Bali hotel</Text>
                    // }
                  >
                    <Image
                      resizeMode="stretch"
                      style={styles.image}
                      source={{uri:item.url}}
                    />
                  </View>
                ))}
              </Swiper>
          
          </View>

          <View style={styles.arrowLeft}>
            {/* <Image
              style={styles.imgArrow} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgArrowRight}
            /> */}
          </View>
        </View>
        
        <Image
          style={styles.imgTopbar} // must be passed from the parent, the number may vary depending upon your screen size
          source={imgBottombar}
        />

        <ScrollView style={{height: 120}}>
          <FlatList
              data={this.formatData(this.state.btnTags, this.state.numColumns)}
              renderItem={this.state.btnTags ? this.renderItem : null}
              numColumns={this.state.numColumns}
              keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
    },
    background: {
        backgroundColor: "rgba(0,0,0,1)",
    },
    header: {
      // flex: 1,
      flexDirection: "row",
      // justifyContent: "space-between",
      backgroundColor: "rgba(0,0,0,1)",
      paddingTop: 5,
      height: 60,
    },
    levelItem: {
      flex: 0.7,
      alignItems: "center"
    },
    levelValueItem: {
      alignItems: "center",
      justifyContent: 'center',
    },
    progressbarItem: {
      flex: 3,
      alignItems: "center",
      textAlignVertical: "center",
      alignContent: "center",
      alignSelf: "center",
      marginHorizontal: 10,
    },
    textLevel: {
      color: '#ae7c31',
      fontSize: 10,
      textAlign: 'center',
    },
    textLevelValue: {
      fontSize: 12,
      position: 'absolute',
      color: '#ae7c31',
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      textAlignVertical: "center"
    },
    imgLevel: {
      width: DEVICE_WIDTH/15,
      resizeMode: "stretch",
      height: DEVICE_WIDTH*1.3/15,
    },
    imgPoint: {
      width: DEVICE_WIDTH*1.3/15,
      resizeMode: "stretch",
      height: DEVICE_WIDTH*1.3/15,
    },
    imgProgressbar: {
      width: "100%",
      height: "30%",
      marginHorizontal: 0,
      resizeMode: "stretch",
      alignItems: "center"
    },
    progressbar: {
      // width: "100%",
      // height: "30%",
      // textAlignVertical: "center"
      // alignItems: "center"
    },
    imgTopbar:  {
      width:"100%",
      height: 10,
      resizeMode: "stretch",
    },
    middleGroup: {
      flex: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: 'black',
      alignItems: "center",
    },
    arrowLeft: {
      alignItems: "center",
      flex: 1,
      marginHorizontal: 10,
    },
    imgArrow: {
      width: DEVICE_WIDTH/18,
      resizeMode: "stretch",
      height: DEVICE_WIDTH*1.8/18,
    },
    imageshow: {
      flex: 10,
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
      alignSelf: "center"
    },
    imageView: {
      flex: 1,
      marginVertical: 3,
      marginHorizontal: 0,
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
      alignSelf: "center"
    },
    imgTagBkg: {
      marginVertical: 2,
      marginHorizontal: 2,
      width: DEVICE_WIDTH/4.2,
      resizeMode: "stretch",
      height: DEVICE_WIDTH*1.3/15,
    },
    tagGroup1: {
      flex: 1,
      margin: 0,
      backgroundColor: 'black',
    },
    tagGroup: {
      flex: 1,
      flexDirection: "row",
      alignSelf: "center",
    },
    tagItem: {
      alignItems: "center",
      justifyContent: 'center',
    },
    textTag: {
      position: 'absolute',
      color: "white",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      alignSelf: "center",
      textAlignVertical: "center"
    },
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      marginVertical: 3,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: 'stretch',
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  listItemEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: "center",
    marginVertical: 3,
    marginHorizontal: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
