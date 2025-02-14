import { View, FlatList, Text } from "react-native";
import React from "react";
import { useVehicles } from "@/service/api/queries/useVehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import VehiclesList from "@/components/ui/VehiclesList";

const HomeScreen = () => {
	const { error, isLoading } = useVehicles();

	if (error) return null;

	if (isLoading) return <LoadingSpinner size="small" color="#0061FF" />;

	return (
		<SafeAreaView className="flex-1">
			<VehiclesList />
		</SafeAreaView>
	);
};

export default HomeScreen;
