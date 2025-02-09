import { UserType } from "@/types/UserType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserData = async (userData: any) => {
	try {
		await AsyncStorage.setItem("userData", JSON.stringify(userData));
	} catch (error) {
		console.error("Error saving user data:", error);
	}
};

export const getUserData = async () => {
	try {
		const data = await AsyncStorage.getItem("userData");
		return data ? JSON.parse(data) : null;
	} catch (error) {
		console.error("Error reading user data:", error);
		return null;
	}
};

export const removeUserData = async () => {
	try {
		await AsyncStorage.removeItem("userData");
	} catch (error) {
		return null;
	}
};
