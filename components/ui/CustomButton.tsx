import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { CustomButtonTypes } from "@/types/CustomButtonTypes";

export const CustomButton: React.FC<CustomButtonTypes> = ({
	onPress,
	icon,
	label,
	buttonStyles,
	textStyles,
	iconColor,
	disabled = false,
	fullWidth = true,
}) => {
	return (
		<TouchableOpacity
			className={`py-4 rounded-xl flex-row justify-center items-center ${buttonStyles}
        ${disabled ? "opacity-50" : "opacity-100"}
        ${fullWidth ? "w-full" : "w-auto"}`}
			onPress={onPress}
			disabled={disabled}
		>
			{icon && (
				<AntDesign
					name={icon}
					size={20}
					color={`${iconColor}`}
					style={{ marginRight: 8 }}
				/>
			)}
			<Text className={`text-center font-rubik-semibold ${textStyles}`}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};
