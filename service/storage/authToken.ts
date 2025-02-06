import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token: string) => {
    try {
        await AsyncStorage.setItem('access_token', token);
    } catch (error) {
        console.error('Error storing token:', error);
    }
};

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem('access_token');
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
};

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem('access_token');
    } catch (error) {
        console.error('Error removing token:', error);
    }
};