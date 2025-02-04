import { Text, ScrollView, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import vehicleIcon from "../assets/icons/vehicle.png";
import { CustomButton } from "@/components/ui/CustomButton";

const AuthScreen = () => {
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
				<View className="px-10 gap-4">
					<Text className="font-rubik text-base text-center text-black-200 uppercase">
						Welcome To Auto Marketplace
					</Text>
					<Text className="font-rubik-semibold text-center text-black-200 text-3xl">
						Lets Get You Closer To{" "}
						<Text className="text-primary-300 font-rubik-extrabold">
							Your Ideal Car
						</Text>
					</Text>
					<CustomButton
						label="Continue"
						buttonStyles="bg-primary-300"
						textStyles="text-white text-xl"
						icon="arrowright"
						iconColor="white"
						onPress={() => router.push("/(root)/(tabs)/home")}
						disabled={false}
						fullWidth={true}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AuthScreen;
