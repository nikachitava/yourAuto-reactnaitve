import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const VehicleScreen = () => {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text>VehicleScreen id: {id}</Text>
		</View>
	);
};

export default VehicleScreen;
