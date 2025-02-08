import { View, Text, ScrollView } from "react-native";
import React from "react";
import { removeToken } from "@/service/storage/authToken";
import { router } from "expo-router";
import {
	AntDesign,
	FontAwesome,
	Foundation,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileItem from "@/components/ui/ProfileItem";

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

				<View className="flex-1 justify-between">
					<View className="gap-3">
						<ProfileItem
							icon={
								<AntDesign
									name="user"
									size={24}
									color="black"
								/>
							}
							onPress={() => {}}
							title="Profile"
							isArrow
							textStyle="#191D31"
						/>
						<ProfileItem
							icon={
								<FontAwesome
									name="sticky-note-o"
									size={24}
									color="black"
								/>
							}
							onPress={() => {}}
							title="My Listings"
							isArrow
							textStyle="#191D31"
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
							textStyle="#191D31"
						/>
					</View>
					<View className="mt-7">
						<ProfileItem
							icon={
								<MaterialCommunityIcons
									name="logout-variant"
									size={24}
									color="#F75555"
								/>
							}
							onPress={handleLogoOut}
							title="Log out"
							isArrow={false}
							textStyle="text-[#F75555] font-rubik-bold"
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;
