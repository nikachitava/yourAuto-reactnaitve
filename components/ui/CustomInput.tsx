import { TextInput, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { CustomInputTypes } from "@/types/CustomInputTypes";

const CustomInput: React.FC<CustomInputTypes> = ({
	name,
	placeholder,
	control,
	keyboardType,
	secureTextEntry,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error },
			}) => (
				<View className="gap-2">
					<TextInput
						placeholder={placeholder}
						className="h-12 px-4 border border-black p-2 rounded-lg font-rubik"
						onChangeText={onChange}
						value={value}
						onBlur={onBlur}
						keyboardType={keyboardType}
						secureTextEntry={secureTextEntry}
					/>
					{error && (
						<Text className="text-sm font-rubik-medium text-danger">
							{error.message}
						</Text>
					)}
				</View>
			)}
		/>
	);
};

export default CustomInput;
