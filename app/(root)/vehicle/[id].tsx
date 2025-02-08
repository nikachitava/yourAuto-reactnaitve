import {
	View,
	Text,
	ScrollView,
	Image,
	Dimensions,
	Platform,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, router } from "expo-router";
import { useVehicle } from "@/service/api/queries/useVehicle";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const VehicleScreen = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { data: vehicle, isLoading, error } = useVehicle(id);

	if (error) return null;
	if (isLoading) return <LoadingSpinner color="#0061FF" size="large" />;

	const DetailRow = ({ label, value }: { label: string; value: string }) => (
		<View className="flex-row justify-between items-center py-3 border-b border-gray-200">
			<Text className="text-gray-600 font-medium">{label}</Text>
			<Text className="text-gray-900">{value}</Text>
		</View>
	);

	const DetailsSection = ({
		title,
		children,
	}: {
		title: string;
		children: React.ReactNode;
	}) => (
		<View className="bg-white p-4 rounded-lg mb-4">
			<Text className="text-xl font-bold mb-3">{title}</Text>
			{children}
		</View>
	);

	return (
		<View className="flex-1 bg-gray-100">
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

			<TouchableOpacity
				onPress={() => router.back()}
				className="absolute left-4 top-12 z-10 bg-white rounded-full p-2 shadow-md"
			>
				<Ionicons name="arrow-back" size={24} color="#000" />
			</TouchableOpacity>

			<ScrollView className="flex-1">
				<ScrollView
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					className="h-72"
				>
					{vehicle?.image.map((img, index) => (
						<Image
							key={index}
							source={{ uri: img }}
							style={{ width }}
							className="h-72"
							resizeMode="cover"
						/>
					))}
				</ScrollView>

				<View className="p-4">
					<View className="bg-white p-4 rounded-lg mb-4">
						<Text className="text-3xl font-bold">
							{vehicle?.title}
						</Text>
						<Text className="text-2xl font-semibold text-blue-600 mt-2">
							${vehicle?.price}
						</Text>
					</View>

					<DetailsSection title="Vehicle Details">
						<DetailRow label="Brand" value={vehicle?.brand || ""} />
						<DetailRow label="Model" value={vehicle?.model || ""} />
						<DetailRow label="Year" value={vehicle?.year || ""} />
						<DetailRow
							label="Mileage"
							value={`${vehicle?.mileage} km` || ""}
						/>
						<DetailRow
							label="Fuel Type"
							value={vehicle?.fuelType || ""}
						/>
					</DetailsSection>

					<DetailsSection title="Technical Specifications">
						<DetailRow
							label="Engine"
							value={vehicle?.engine || ""}
						/>
						<DetailRow
							label="Transmission"
							value={vehicle?.gearBox || ""}
						/>
						<DetailRow
							label="Drive Type"
							value={vehicle?.driveType || ""}
						/>
						<DetailRow
							label="Cylinder"
							value={vehicle?.cylinder || ""}
						/>
						<DetailRow label="VIN" value={vehicle?.vin || ""} />
					</DetailsSection>

					<DetailsSection title="Additional Information">
						<DetailRow
							label="Condition"
							value={vehicle?.condition || ""}
						/>
						<DetailRow label="Color" value={vehicle?.color || ""} />
						<DetailRow label="Doors" value={vehicle?.door || ""} />
						<DetailRow
							label="Status"
							value={vehicle?.status || ""}
						/>
					</DetailsSection>

					<View className="bg-white p-4 rounded-lg mb-4">
						<Text className="text-xl font-bold mb-3">
							Description
						</Text>
						<Text className="text-gray-700 leading-6">
							{vehicle?.description}
						</Text>
					</View>

					<View className="bg-white p-4 rounded-lg mb-4">
						<Text className="text-xl font-bold mb-3">
							Seller Information
						</Text>
						<Text className="text-gray-700">
							Name: {vehicle?.owner.name}
						</Text>
						<Text className="text-gray-700">
							Contact: {vehicle?.owner.phone}
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default VehicleScreen;
