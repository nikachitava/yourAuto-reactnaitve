import { View, FlatList, Text } from "react-native";
import React from "react";
import { useVehicles } from "@/service/api/queries/useVehicles";
import { SafeAreaView } from "react-native-safe-area-context";
import VehicleCard from "@/components/ui/VehicleCard";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import useUser from "@/hooks/useUser";
import Search from "@/components/ui/Search";

const HomeScreen = () => {
	const { data: vehicles, error, isLoading } = useVehicles();
	const { user } = useUser();

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
						fuelType={item.fuelType}
						gearBox={item.gearBox}
						image={item.image}
						mileage={item.mileage}
						model={item.model}
						price={item.price}
						year={item.year}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View className="mb-10">
						<Text className="font-rubik-bold text-black-300 text-xl">
							Welcome, {user?.name}
						</Text>
						<Search />
					</View>
				}
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
