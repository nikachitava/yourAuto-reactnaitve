import { Control } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

export interface CustomInputTypes {
	control: Control<any>;
	name: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
}