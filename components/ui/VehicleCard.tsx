import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	AntDesign,
	MaterialCommunityIcons,
	FontAwesome,
} from "@expo/vector-icons";
import { IVehicleCardProps } from "@/types/VehicleTypes";

const VehicleCard: React.FC<IVehicleCardProps> = ({
	image,
	price,
	brand,
	mileage,
	model,
	gearBox,
	fuelType,
	year,
}) => {
	const imageSource =
		typeof image === "string"
			? { uri: image }
			: Array.isArray(image) && image[0]
			? { uri: image[0] }
			: undefined;

	return (
		<TouchableOpacity
			onPress={() => {}}
			className="bg-white rounded-2xl overflow-hidden mb-4 shadow-md"
		>
			<View className="relative h-[200px]">
				<Image
					source={imageSource}
					className="w-full h-full"
					resizeMode="cover"
				/>
				<LinearGradient
					colors={["rgba(0,0,0,0.7)", "transparent"]}
					className="absolute left-0 right-0 top-0 h-1/2"
				/>
				<View className="absolute top-4 right-4 bg-white/90 px-3 py-2 rounded-full">
					<Text className="text-blue-500 text-base font-rubik-bold">
						{year}
					</Text>
				</View>
				<TouchableOpacity className="absolute top-4 left-4">
					<FontAwesome name="heart-o" size={24} color="white" />
				</TouchableOpacity>
			</View>

			<View className="p-4">
				<Text className="text-2xl text-slate-800 mb-2 font-rubik-extrabold">
					{`${brand} ${model}`}
				</Text>
				<Text className="text-xl font-rubik-bold text-blue-500 mb-4">
					{`$${price}`}
				</Text>

				<View className="justify-between gap-2">
					<View className="flex-row items-center">
						<AntDesign name="dashboard" size={20} color="#64748b" />
						<Text className="ml-2 text-slate-500 text-base font-rubik-light">
							{mileage} miles
						</Text>
					</View>

					<View className="flex-row items-center">
						<MaterialCommunityIcons
							name="car-brake-fluid-level"
							size={20}
							color="#64748b"
						/>
						<Text className="ml-2 text-slate-500 text-base font-rubik-light">
							{gearBox}
						</Text>
					</View>

					<View className="flex-row items-center">
						<MaterialCommunityIcons
							name="fuel"
							size={20}
							color="#64748b"
						/>
						<Text className="ml-2 text-slate-500 text-base font-rubik-light">
							{fuelType}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default VehicleCard;
