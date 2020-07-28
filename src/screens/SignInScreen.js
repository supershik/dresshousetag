import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
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

import { LoginButton, AccessToken, ShareDialog, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { Card, Image } from 'react-native-elements'
import Toast from 'react-native-simple-toast'
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import USERAPIKit, { setUserClientToken } from '../utils/apikit';

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
      isLoggedIn: false,
      loading: false,
    };

  }

  static navigationOptions = {
    headerShown: false,
  };

  onPressFacebook = () => {

  }

    // requestSignin = async (data) => {
    //   this.setState({loading: true});
    //   const { navigate } = this.props.navigation;
    //   const payload = {
    //       "facebook_id" : data.id,
    //       "name": data.name,
    //       "age": 28,
    //       "birthday": "1997-09-03",
    //       "sex": "male",
    //       "email_address": data.picture.data.url,
    //       "signup": "2019-11-24 09:34:24",
    //       "last_online_active": "2020-07-27 11:00:02",
    //       "trust_id": 12
    //   }
    //   // fetch('https://mywebsite.com/endpoint/', {
    //   fetch("http://localhost/tag_app", {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: payload
    //   }).then((response)=>{
    //         console.log(response);
    //         this.setState({loading: false});
    //         Toast.show('Successfully registered.');
    //       }).
    //       catch((err)=>{
    //         this.setState({loading: false});
    //         console.log(err);
    //         Toast.show('Failed to register');
    //         console.log(err);
    //     })
    // }

  requestSignin = (data) => {
    const { navigate } = this.props.navigation;
    const payload = {
        "facebook_id" : data.id,
        "name": data.name,
        "age": "",
        "birthday": "1980-01-01",
        "sex": "",
        "email_address": "",
        "signup": "",
        "last_online_active": "",
        "trust_id": 1,
    }
    console.log('---------------------- 1  -------');
    console.log(payload);
    const onSuccess = ({ data }) => {
        console.log('---------------------- 4  -------');
        console.log(data);
        this.setState({loading: false});
        Toast.show('Successfully registered.');
        this.requestTags(data);
        //navigate('Home', {data: data});
    }
    const onFailure = error => {
      console.log('---------------------- 5  -------');
        this.setState({loading: false});
        console.log(error);
        Toast.show('Failed to register');
    }
    this.setState({loading: true});
    USERAPIKit.post('/signin.php', payload)
        .then(onSuccess)
        .catch(onFailure)
  }

  requestTags = (products) => {
    const { navigate } = this.props.navigation;
    const onSuccess = ({ data }) => {
        console.log(data);
        this.setState({loading: false});

        navigate('Home', {products: products, tags: data});
    }
    const onFailure = error => {
      console.log('---------------------- 5  -------');
        this.setState({loading: false});
        console.log(error);
    }
    this.setState({loading: true});
    USERAPIKit.get('/product_tags.php')
        .then(onSuccess)
        .catch(onFailure)
  }

  onFBLogin(){
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
          this.requestSignin(result);

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
        <Spinner
          visible={this.state.loading} size="large" style={styles.spinnerStyle} />
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
    },
    spinnerStyle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
