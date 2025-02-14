import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList,
} from "react-native";
import React from "react";
import { useSearchFilterStore } from "@/store/SearchFilterStore";

interface FilterSectionProps {
	title: string;
	options: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
	const { setBrands, setModels, setStatus, brands, models, status } =
		useSearchFilterStore();

	const isSelected = (option: string): boolean => {
		switch (title) {
			case "Brands":
				return brands.includes(option);
			case "Models":
				return models.includes(option);
			case "Status":
				return status === option;
			default:
				return false;
		}
	};

	const handleFilterPress = (option: string) => {
		switch (title) {
			case "Brands":
				setBrands(option);
				break;
			case "Models":
				setModels(option);
				break;
			case "Status":
				setStatus(option);
				break;
			default:
				break;
		}
	};

	return (
		<View className="flex-1">
			<FlatList
				data={options}
				keyExtractor={(item) => item}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity
						className={`px-4 py-2 rounded-xl m-1 ${
							isSelected(item)
								? "bg-primary-300"
								: "bg-primary-100"
						}`}
						onPress={() => handleFilterPress(item)}
					>
						<Text
							className={`text-sm ${
								isSelected(item)
									? "text-white font-rubik-bold"
									: "text-black-300 font-rubik"
							}`}
						>
							{item}
						</Text>
					</TouchableOpacity>
				)}
				ListHeaderComponent={
					<View className="flex-1 bg-red-400">
						<Text className="text-lg font-rubik-semibold text-black-600">
							{title}
						</Text>
					</View>
				}
			/>
		</View>
	);
};

export default FilterSection;
