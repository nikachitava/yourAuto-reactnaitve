import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useVehicles } from "@/service/api/queries/useVehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToken } from "@/service/storage/authToken";

const HomeScreen = () => {
	const { data: vehicles, error } = useVehicles();

	if (error) return null;

	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await getToken();
				setToken(token);
			} catch (error) {
				throw error;
			}
		};
		fetchToken();
	}, []);

	return (
		<SafeAreaView className="flex-1">
			<ScrollView>
				<Text>HomeScreen</Text>
				<Text>{token}</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
