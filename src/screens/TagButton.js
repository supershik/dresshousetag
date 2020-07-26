import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";

class TagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedHome: false,
      focusedCategory: false,
      focusedFavorite: false,
      focusedOrder: true,
      focusedAccount: false,
    };
  }

  componentDidMount() {}

  onPressHome = () => {
    NavigationService.navigate("HomeScreen", { key: "AccountScreen" });
  };

  onPressCategory = () => {
    NavigationService.navigate("CategoryScreen", { key: "CategoryScreen" });
  };

  onPressFavorite = () => {
    NavigationService.navigate("FavoriteScreen", { key: "FavoriteScreen" });
  };

  onPressAccount = () => {
    NavigationService.navigate("AccountScreen", { key: "AccountScreen" });
  };

  onPressOrder = () => {
    NavigationService.navigate("OrderScreen", { key: "AccountScreen" });
  };
  

  isFocused =  (focusedTabBar, currentTabBar) => {
    return focusedTabBar === currentTabBar;
  };

  render({ focusedTabButton } = this.props) {
    return (
      <SafeAreaView>
        <View style={styles.tabbarcontainer}>
          <TouchableOpacity style={styles.tagItem} onPress={this.onPressHome}>
            {this.isFocused(focusedTabButton, "home") ? (
              <Image
                style={styles.imgTagBkg} // must be passed from the parent, the number may vary depending upon your screen size
                source={imgTagBkg}
              />
            ) : (
              <Image
                style={styles.imgTagBkg} // must be passed from the parent, the number may vary depending upon your screen size
                source={imgTagBkg}
              />
            )}
              <Text style={styles.textTag}>
                TAGS
              </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  line: {
    borderTopColor: "#7a7a7a",
    borderTopWidth: 0.3,
  },

  tabbarcontainer: {
    flex: 1,
    flexDirection: "row",
    height: 48,
    backgroundColor: Colors.tabBar,
    alignItems: "center",
  },
  navigationFontOn: {
    fontSize: 12,
    color: "#1cbb69",
  },
  tab1: {
    width: "20%",
    alignItems: "center",
  },
});

export default TagButton;
