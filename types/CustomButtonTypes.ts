import { AntDesign } from "@expo/vector-icons";

export interface CustomButtonTypes {
    onPress: () => void;
    buttonStyles?: string,
    textStyles?: string;
    iconColor?: string;
	icon?: keyof typeof AntDesign.glyphMap,
	label: string;
	disabled: boolean,
	fullWidth: boolean,
    iconAlign?: "left" | "right"
}