import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import { useVehicles } from "@/service/api/queries/useVehicles";
import useUser from "@/hooks/useUser";
import Search from "./Search";
import { useSearchFilterStore } from "@/store/SearchFilterStore";
import { IVehicle } from "@/types/VehicleTypes";

const VehiclesList = () => {
	const { data: vehicles } = useVehicles();
	const { user } = useUser();
	const { brands, models, status } = useSearchFilterStore();
	const [filteredVehicle, setFilteredVehicle] = useState<IVehicle[]>([]);

	const filterVehicles = () => {
		if (!vehicles) return;

		if (brands.length === 0 && models.length === 0 && !status) {
			setFilteredVehicle(vehicles);
			return;
		}

		const filtered = vehicles.filter((vehicle) => {
			const brandMatch = brands.length
				? brands.includes(vehicle.brand)
				: false;
			const modelMatch = models.length
				? models.includes(vehicle.model)
				: false;
			const statusMatch = status ? vehicle.status === status : false;

			return brandMatch || modelMatch || statusMatch;
		});

		setFilteredVehicle(filtered);
	};

	useEffect(() => {
		filterVehicles();
	}, [brands, models, status]);

	return (
		<View className="flex-1">
			<View className="mb-10  px-4 pt-5">
				<Text className="font-rubik-bold text-black-300 text-xl">
					Welcome, {user?.name}
				</Text>
				<Search />
			</View>
			<FlatList
				data={filteredVehicle}
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
				keyExtractor={(vehicle) => vehicle._id}
				ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
				contentContainerStyle={{
					paddingTop: 20,
					paddingHorizontal: 16,
					paddingBottom: 80,
				}}
			/>
		</View>
	);
};

export default VehiclesList;
