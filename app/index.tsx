import { Text, ScrollView, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import vehicleIcon from "../assets/icons/vehicle.png";
import { CustomButton } from "@/components/ui/CustomButton";
import { getToken } from "@/service/storage/authToken";

const AuthScreen = () => {
	const fetchToken = async () => {
		try {
			const token = await getToken();
			if (token) {
				router.push("/(root)/(tabs)/home");
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchToken();
	}, []);

	return (
		<SafeAreaView className="h-full">
			<ScrollView
				contentContainerStyle={{
					height: "100%",
				}}
			>
				<Image
					source={vehicleIcon}
					className="w-full h-2/3"
					resizeMode="contain"
				/>
				<View className="px-10 gap-12">
					<View className="gap-3">
						<Text className="font-rubik text-base text-center text-black-200 uppercase">
							Welcome To Auto Marketplace
						</Text>
						<Text className="font-rubik-semibold text-center text-black-200 text-3xl">
							Lets Get You Closer To{" "}
							<Text className="text-primary-300 font-rubik-extrabold">
								Your Ideal Car
							</Text>
						</Text>
					</View>
					<CustomButton
						label="Start Discover"
						buttonStyles="bg-primary-300"
						textStyles="text-white text-xl"
						icon="arrowright"
						iconColor="white"
						onPress={() => router.push("/(root)/auth")}
						disabled={false}
						fullWidth={true}
						iconAlign="right"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AuthScreen;
