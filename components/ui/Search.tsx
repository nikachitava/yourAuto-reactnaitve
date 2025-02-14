import { View, TextInput, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FilterSection from "./FilterSection";
import { vehicleModels, vehicleBrands } from "@/data/VehicleData";

const filters = {
	brands: ["Toyota", "BMW", "Mercedes", "Audi"],
	models: ["Model X", "Camry", "A-Class", "Q7", "C-Class"],
	years: ["2020", "2021", "2022", "2023"],
	status: ["New", "Used"],
};

const Search = () => {
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [search, setSearch] = useState<string>();

	const handleFilterOpen = () => {
		setIsFilterOpen((isFilterOpen) => !isFilterOpen);
	};

	const handleSearch = (text: string) => {
		setSearch(text);
	};

	return (
		<View className="relative" style={{ zIndex: 10000 }}>
			<View className="flex flex-row items-center justify-between w-full px-4 rounded-2xl bg-accent-100 border border-primary-100 mt-2 py-2">
				<View className="flex-1 flex flex-row items-center justify-start z-50">
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
			{isFilterOpen && (
				<View className="absolute top-16 w-full bg-white shadow-lg rounded-lg p-4 mt-5">
					{<FilterSection title="Brands" options={vehicleBrands} />}
					{/* {<FilterSection title="Models" options={filters.models} />}
					{<FilterSection title="Years" options={filters.years} />}
					{<FilterSection title="Status" options={filters.status} />} */}

					{/* <TouchableOpacity className="bg-primary-300 py-2 rounded-xl mt-4">
						<Text className="text-white text-center font-rubik-bold">
							Apply Filters
						</Text>
					</TouchableOpacity> */}
				</View>
			)}
		</View>
	);
};

export default Search;
