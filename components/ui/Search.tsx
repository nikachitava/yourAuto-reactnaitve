import { View, TextInput, TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FilterSection from "./FilterSection";
import {
	vehicleModels,
	vehicleBrands,
	vehicleStatus,
	VehicleModels,
} from "@/data/VehicleData";
import { useSearchFilterStore } from "@/store/SearchFilterStore";
import { VehicleBrands } from "@/types/VehicleTypes";

const Search = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState<string>();
	const [models, setModels] = useState<string[] | null>(null);

	const handleFilterOpen = () => {
		setIsFilterOpen((isFilterOpen) => !isFilterOpen);
	};

	const handleSearch = (text: string) => {
		setSearch(text);
	};

	const { brands } = useSearchFilterStore();

	const getVehicleModels = (brands: VehicleBrands[]): VehicleModels => {
		return brands.flatMap((brand) => vehicleModels[brand]);
	};

	useEffect(() => {
		const models = getVehicleModels(brands);
		setModels(models);
	}, [brands]);

	return (
		<View>
			<View className="flex flex-row items-center justify-between w-full px-4 rounded-2xl bg-accent-100 border border-primary-100 mt-2 py-2">
				<View className="flex-1 flex flex-row items-center justify-start">
					<AntDesign name="search1" size={20} color="black" />
					<TextInput
						value={search}
						onChangeText={handleSearch}
						placeholder="Search for anything"
						className="text-base font-rubik text-black-300 ml-2 flex-1"
					/>
				</View>

				<TouchableOpacity onPress={handleFilterOpen}>
					<AntDesign name="filter" size={20} color="black" />
				</TouchableOpacity>
			</View>

			<Modal
				visible={isFilterOpen}
				transparent
				animationType="fade"
				onRequestClose={() => setIsFilterOpen(false)}
			>
				<TouchableOpacity
					activeOpacity={1}
					onPress={() => setIsFilterOpen(false)}
					className="flex-1 bg-black/50"
				>
					<TouchableOpacity
						activeOpacity={1}
						onPress={(e) => e.stopPropagation()}
						className="bg-white rounded-lg p-4 mt-32 mx-4"
					>
						<View className="mb-4 gap-4">
							<FilterSection
								title="Brands"
								options={vehicleBrands}
							/>
							{brands.length > 0 && (
								<FilterSection
									title="Models"
									options={models as string[]}
								/>
							)}
							<FilterSection
								title="Status"
								options={vehicleStatus}
							/>
						</View>
					</TouchableOpacity>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

export default Search;
