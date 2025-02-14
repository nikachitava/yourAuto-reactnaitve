import { View, Text, FlatList } from "react-native";
import React from "react";
import VehicleCard from "./VehicleCard";
import { useVehicles } from "@/service/api/queries/useVehicles";
import useUser from "@/hooks/useUser";
import Search from "./Search";

const VehiclesList = () => {
	const { data: vehicles } = useVehicles();
	const { user } = useUser();

	return (
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
	);
};

export default VehiclesList;
