import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Search = () => {
	const [search, setSearch] = useState<string>();

	const handleSearch = (text: string) => {
		setSearch(text);
	};

	return (
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

			<TouchableOpacity>
				<AntDesign name="filter" size={20} color="black" />
			</TouchableOpacity>
		</View>
	);
};

export default Search;
