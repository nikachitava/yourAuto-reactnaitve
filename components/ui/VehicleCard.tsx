import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { IVehicle } from "@/types/VehicleTypes";
import { AntDesign } from "@expo/vector-icons";

const VehicleCard: React.FC<IVehicle> = ({
	_id,
	image,
	title,
	price,
	brand,
	model,
	mileage,
	year,
	driveType,
	fuelType,
}) => {
	const imageSource =
		typeof image === "string"
			? { uri: image }
			: Array.isArray(image) && image[0]
			? { uri: image[0] }
			: undefined;

	return (
		<View className="bg-white rounded-2xl overflow-hidden shadow-md mb-4">
			<View className="relative">
				{imageSource && (
					<Image
						source={imageSource}
						className="w-full h-48"
						resizeMode="cover"
					/>
				)}
			</View>

			<View className="p-4">
				<View className="flex-row justify-between items-center mb-2">
					<Text className="text-xl font-bold">{`${year} ${brand} ${model}`}</Text>
					<Text className="text-blue-600 font-bold text-lg">
						${price?.toLocaleString()}
					</Text>
				</View>

				<View className="flex-row items-center mb-3">
					<AntDesign name="filter" size={24} color="#888" />
					<Text className="ml-2 text-gray-600">
						{mileage?.toLocaleString()} miles | {driveType}
					</Text>
				</View>

				<View className="flex-row justify-between items-center">
					<View className="flex-row space-x-2">
						<View className="bg-blue-100 px-3 py-1 rounded-full">
							<Text className="text-blue-600 text-xs">
								{fuelType}
							</Text>
						</View>
					</View>

					<TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-full">
						<Text className="text-white font-semibold">
							View Details
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default VehicleCard;
