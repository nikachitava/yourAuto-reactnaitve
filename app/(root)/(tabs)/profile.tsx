import { View, Text } from "react-native";
import React from "react";
import { CustomButton } from "@/components/ui/CustomButton";
import { removeToken } from "@/service/storage/authToken";
import { router } from "expo-router";

const ProfileScreen = () => {
	const handleLogoOut = async () => {
		try {
			await removeToken();
			router.push("/auth");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Text>ProfileScreen</Text>
			<CustomButton
				fullWidth
				disabled={false}
				label="Log out"
				onPress={handleLogoOut}
			/>
		</View>
	);
};

export default ProfileScreen;
