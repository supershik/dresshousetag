import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'
// Create axios client, pre-configured with baseURL
let USERAPIKit = axios.create({
  // baseURL: 'http://192.168.1.2',
  baseURL: "https://dresshouse.ee/tag_app",
  timeout: 10000,
});
// Set JSON Web Token in Client to be included in all calls
export const setUserClientToken = () => {  
  USERAPIKit.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('userToken')
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        Promise.reject(error)
    });
};

export default USERAPIKit;