import { StyleSheet, View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import { CustomSelectTypes } from "@/types/CustomSelectTypes";

const CustomSelect: React.FC<CustomSelectTypes> = ({
	name,
	placeholder,
	control,
	selectItems,
	disabled,
}) => {
	const [isFocus, setIsFocus] = useState(false);

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value, onBlur },
				fieldState: { error },
			}) => (
				<View className="gap-2">
					<Dropdown
						style={[
							styles.dropdown,
							isFocus && { borderColor: "blue" },
							disabled && { borderColor: "black" },
						]}
						placeholderStyle={styles.placeholderStyle}
						selectedTextStyle={styles.selectedTextStyle}
						inputSearchStyle={styles.inputSearchStyle}
						iconStyle={styles.iconStyle}
						data={selectItems}
						search
						maxHeight={300}
						labelField="label"
						valueField="value"
						placeholder={
							!isFocus
								? disabled
									? "Choose brand first"
									: placeholder
								: "..."
						}
						searchPlaceholder="Search..."
						value={value}
						onFocus={() => setIsFocus(true)}
						onBlur={() => {
							setIsFocus(false);
							onBlur();
						}}
						onChange={(item) => {
							onChange(item.value);
							setIsFocus(false);
						}}
						disable={disabled}
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

export default CustomSelect;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
		padding: 16,
	},
	dropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: -8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
