import { Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const AuthScreen = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<Text>Welcome Back!</Text>
				<TouchableOpacity
					onPress={() => router.push("/(root)/(tabs)/home")}
				>
					<Text>Go to homescreen</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default AuthScreen;
