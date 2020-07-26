import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  // Image,
  ImageBackground,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StatusBar,
  TouchableHighlight
 } from "react-native";

 import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { LoginButton, AccessToken, ShareDialog, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { Card, Image } from 'react-native-elements'
import {Actions, ActionConst} from 'react-native-router-flux';
import Toast from 'react-native-simple-toast'

import HomeScreen from "./HomeScreen"
import imgLogo from "../res/image/logo.png"
import imgFlagEst from "../res/image/flag_est.png"
import imgFlagEng from "../res/image/flag_eng.png"
import imgFlagRus from "../res/image/flag_rus.png"
import imgFacebook from "../res/image/facebook.png"
 
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const logHeight = DEVICE_WIDTH*866/1920;

const SHARE_LINK_CONTENT = {
  contentType: 'link',
  contentUrl: 'https://www.facebook.com/',
};

export default class SignInScreen extends Component {
// class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: [],
      profileImage: "",
      isLoggedIn: false
    };

  }

  static navigationOptions = {
    header: null,
  };

  onPressFacebook = () => {

  }

  onFBLogin(){
    Actions.HomeScreen();
    return;
    
    LoginManager.logInWithPermissions(["public_profile"]).then((result)=> {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          this.setState({isLoggedIn: true});
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              console.log(data.accessToken.toString());
              this.getPublicProfile();
          })
        }     

          // AccessToken.getCurrentAccessToken().then((data) => {
          //   const { accessToken } = data
          //   fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + accessToken)
          //     .then((response) => response.json())
          //     .then((json) => {
          //       let login = {
          //         FirstName: json.name, 
          //         LastName: "", 
          //         PhoneNumber: "",
          //         UserID: json.id, 
          //         image: "", 
          //         notification: "1", 
          //         phone_code: this.props.code, 
          //         rating: ""
          //       }
          //       console.log('Login Success');
          //       console.log('Data = ', login);

                // this.props.saveCredentials(login);
                // saveUserLogin(login, success => { }, errAsyncStore => { });
                //   if (this.isCheckout) {
                //     this.props.navigation.goBack();
                //   } else {
                //     this.props.saveToken(this.state.firebaseToken)
                //     saveUserFCM(
                //       this.state.firebaseToken, success => { }, failure => { }
                //     )
                //     this.props.navigation.dispatch(
                //       StackActions.reset({
                //         index: 0,
                //         actions: [
                //           NavigationActions.navigate({ routeName: "MainContainer" })
                //         ]
                //       })
                //     );    
                //   }
              // })
              // .catch(() => {
              //   console.log('ERROR GETTING DATA FROM FACEBOOK')
              // })
          //})
          
        //}
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  getPublicProfile = async () => {
    const infoRequest = new GraphRequest(
      '/me?fields=id,name,picture',
      null,
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          console.log(result);
          this.setState({
            profile: result,
            profileImage: result.picture.data.url
          });
          Toast.show('Login Success!');
          Actions.HomeScreen();
        }
      }
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  }
  shareLinkWithDialog = async () => {
    const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT);
    if (canShow) {
      try {
        const {isCancelled, postId} = await ShareDialog.show(
          SHARE_LINK_CONTENT,
        );
        if (isCancelled) {
          Alert.alert('Share cancelled');
        } else {
          Alert.alert('Share success with postId: ' + postId);
        }
      } catch (error) {
        Alert.alert('Share fail with error: ' + error);
      }
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logoImage} // must be passed from the parent, the number may vary depending upon your screen size
          source={imgLogo}
        />
        <Text style={styles.textTitle}>
          VALI KEEL:
        </Text>
        <View style={styles.flagGroup}>
          <View style={styles.flagItem}>
            <Image
              style={styles.flagImg} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgFlagEst}
            />
            <Text style={styles.flagName}>
              EST
            </Text>
          </View>
          <View style={styles.flagItem}>
            <Image
              style={styles.flagImg} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgFlagEng}
            />
            <Text style={styles.flagName}>
              EST
            </Text>
          </View>
          <View style={styles.flagItem}>
            <Image
              style={styles.flagImg} // must be passed from the parent, the number may vary depending upon your screen size
              source={imgFlagRus}
            />
            <Text style={styles.flagName}>
              EST
            </Text>
          </View>
        </View>
        <View style={styles.btnFacebook}>
          {/* <Button
              onPress={this.onPressFacebook}
              title="Log in with Facebook"
              // color="#841584"
              accessibilityLabel="Learn more about this purple button"
            /> */}
             {/* <LoginButton
                // publishPermissions={["email"]}
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      alert("Login failed with error: " + error.message);
                      console.log("login has error: ", result.error);
                    } else if (result.isCancelled) {
                      alert("Login was cancelled");
                      console.log("login is cancelled.");
                    } else {
                      alert("Login was successful with permissions: " + result.grantedPermissions)
                      AccessToken.getCurrentAccessToken().then(
                        (data) => {
                          console.log(data.accessToken.toString())
                        }
                      )
                      console.log(result);
                    }
                  }
                }
              onLogoutFinished={() => alert("User logged out")}/> */}

              <TouchableOpacity style={{
                    width: 300,
                    borderRadius:4,
                    backgroundColor:'#3f569e',
                    justifyContent:'center',
                    padding:12,
                    paddingHorizontal: 0,
                    shadowColor: 'rgba(47, 47, 47, 1)',
                    shadowOffset: { width: 6, height: 6 },
                    shadowRadius: 5,
                    elevation: 3
                  }} 
                  onPress = {()=>this.onFBLogin()}
                  >
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                      <Image source={imgFacebook} style={{marginHorizontal: 10, width:24, height:24}}/>
                      <Text style={{flex: 1, textAlign: "center", fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Log in with Facebook</Text>
                    </View>
              </TouchableOpacity>

        {/* <View>
            <LoginButton
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    this.setState({isLoggedIn: true});
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString());
                        this.getPublicProfile();
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => {
                console.log("logout.");
                this.setState({isLoggedIn: false});
              }}/>
            { this.state.isLoggedIn && <Card
                title={this.state.profile.name}>
                <Image
                  source={{ uri: this.state.profileImage }}
                  style={{ width: 50, height: 50 }}
                />
                <TouchableHighlight onPress={this.shareLinkWithDialog}>
                  <Text style={styles.shareText}>Share link with ShareDialog</Text>
                </TouchableHighlight>
              </Card>
            }
          </View> */}
          </View>
      </SafeAreaView>
    );
  }
}

// export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)",
    },
    background: {
        backgroundColor: "rgba(0,0,0,1)",
    },
    scrollView: {
      backgroundColor: "rgba(0,0,0,1)",
    },
    textTitle: {
      marginTop: 30,
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },
    logoImage: {
      top: 0,
      resizeMode: "stretch",
      width: DEVICE_WIDTH,
      height: logHeight,
    },
    flagGroup: {
      flex: 1,
      marginTop: 30,
      flexDirection: "row",
      justifyContent: "center",
    },
    flagImg: {
      width: DEVICE_WIDTH/6,
      resizeMode: "stretch",
      height: DEVICE_WIDTH*0.955/6,
    },
    flagName: {
      textAlign: "center",
      fontSize: 20,
      color: 'white',
    },
    flagItem: {
      alignItems: "center",
      marginHorizontal: 5,
    },
    btnFacebook: {
      flex: 2,
      alignItems: "center",
      marginTop: 50,
      marginHorizontal: 10,
    }
});