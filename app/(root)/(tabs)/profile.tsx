import { View, Text, ScrollView } from "react-native";
import React from "react";
import { removeToken } from "@/service/storage/authToken";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileItem from "@/components/ui/ProfileItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
		<SafeAreaView className="flex-1 px-4">
			<ScrollView className="flex-1">
				<View className="flex-row items-center justify-between py-4">
					<Text className="font-rubik-semibold">Profile</Text>
					<AntDesign name="bells" size={18} color="#191D31" />
				</View>

				<View className="gap-4">
					<ProfileItem
						icon={<Entypo name="user" size={24} color="black" />}
						onPress={() => {}}
						title="Profile"
						isArrow
					/>
					<ProfileItem
						icon={
							<MaterialIcons
								name="note-add"
								size={24}
								color="black"
							/>
						}
						onPress={() => {}}
						title="My Listings"
						isArrow
					/>
					<ProfileItem
						icon={
							<Foundation
								name="page-add"
								size={24}
								color="black"
							/>
						}
						onPress={() => {}}
						title="Add Listing"
						isArrow
					/>
					<ProfileItem
						icon={
							<MaterialCommunityIcons
								name="logout-variant"
								size={24}
								color="black"
							/>
						}
						onPress={handleLogoOut}
						title="Log out"
						isArrow={false}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;
