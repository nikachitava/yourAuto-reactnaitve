import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { useVehicles } from "@/service/api/queries/useVehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import VehicleCard from "@/components/ui/VehicleCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const HomeScreen = () => {
	const { data: vehicles, error, isLoading } = useVehicles();

	if (error) return null;

	if (isLoading) return <LoadingSpinner size="small" color="#0061FF" />;

	return (
		<SafeAreaView className="flex-1">
			<FlatList
				data={vehicles}
				renderItem={({ item }) => (
					<VehicleCard
						_id={item._id}
						brand={item.brand}
						color={item.color}
						condition={item.color}
						cylinder={item.cylinder}
						description={item.description}
						door={item.door}
						driveType={item.driveType}
						engine={item.engine}
						fuelType={item.fuelType}
						gearBox={item.gearBox}
						image={item.image}
						mileage={item.mileage}
						model={item.model}
						owner={item.owner}
						price={item.price}
						status={item.status}
						title={item.title}
						type={item.type}
						vin={item.vin}
						year={item.year}
						key={item._id}
					/>
				)}
				keyExtractor={(vehicle) => vehicle._id}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				contentContainerStyle={{
					paddingTop: 20,
					paddingHorizontal: 16,
					paddingBottom: 80,
				}}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
