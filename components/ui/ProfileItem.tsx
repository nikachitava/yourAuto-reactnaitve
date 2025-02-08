import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ProfileItemProps } from "@/types/ProfileItemProps";

const ProfileItem: React.FC<ProfileItemProps> = ({
	icon,
	title,
	isArrow,
	textStyle,
	onPress,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className="flex-row justify-between items-center"
		>
			<View className="flex-row items-center gap-4 py-2">
				{icon}
				<Text className={`font-rubik text-base ${textStyle}`}>
					{title}
				</Text>
			</View>
			{isArrow && (
				<AntDesign name="arrowright" size={15} color={"#000000"} />
			)}
		</TouchableOpacity>
	);
};

export default ProfileItem;
