import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

interface LoadingSpinner {
	size: "small" | "large";
	color: string;
}

const LoadingSpinner: React.FC<LoadingSpinner> = ({ size, color }) => {
	return (
		<View className="flex-1 justify-center items-center">
			<ActivityIndicator size={size} color={color} />
		</View>
	);
};

export default LoadingSpinner;
