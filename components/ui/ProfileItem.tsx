import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { ProfileItemProps } from "@/types/ProfileItemProps";

const ProfileItem: React.FC<ProfileItemProps> = ({
	icon,
	title,
	isArrow,
	onPress,
}) => {
	return (
		<Pressable
			onPress={onPress}
			className="flex-row justify-between items-center"
		>
			<View className="flex-row items-center gap-2 py-2">
				{icon}
				<Text className="font-rubik-medium text-base">{title}</Text>
			</View>
			{isArrow && (
				<AntDesign name="arrowright" size={15} color={"#000000"} />
			)}
		</Pressable>
	);
};

export default ProfileItem;
