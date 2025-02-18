import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/ui/CustomInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreateListinSchema } from "@/schemas/CreateListingSchema";
import CustomSelect from "@/components/ui/CustomSelect";
import {
	fuelTypes,
	gearboxTypes,
	vehicleBrands,
	vehicleModels,
	vehicleStatus,
	vehicleTypes,
} from "@/data/VehicleData";
import { CustomButton } from "@/components/ui/CustomButton";

const VehicleListing = () => {
	const { control, handleSubmit, setError, watch } = useForm<
		z.infer<typeof CreateListinSchema>
	>({
		resolver: zodResolver(CreateListinSchema),
		defaultValues: {
			title: "",
			brand: "",
			model: "",
			type: "",
			status: "",
			fuelType: "",
			year: "",
			price: "",
			mileage: "",
			engine: "",
			gearBox: "",
			description: "",
			driveType: "",
			condition: "",
			door: "",
			cylinder: "",
			color: "",
			vin: "",
			image: null,
		},
	});

	const brandValue = watch("brand");
	const [models, setModels] = useState<string[] | null>(null);

	const mapToDropDownData = (data: any[]) => {
		return data.map((item) => ({
			label: item,
			value: item,
		}));
	};

	const getVehicleModels = (brand: string): string[] => {
		return vehicleModels[brand as keyof typeof vehicleModels] || [];
	};

	useEffect(() => {
		const models = getVehicleModels(brandValue);
		setModels(models);
	}, [brandValue]);

	const onSubmit = (data: z.infer<typeof CreateListinSchema>) => {
		console.log(data);
	};

	return (
		<SafeAreaView className="flex-1">
			<ScrollView
				className="flex-1 px-5 pt-4"
				showsVerticalScrollIndicator={false}
			>
				<View>
					<Text className="font-rubik-medium text-primary-300 text-lg">
						Add Vehicle To Listing
					</Text>
				</View>
				<View className="gap-4 mt-4 pb-80">
					<CustomInput
						control={control}
						name="title"
						placeholder="Title"
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(vehicleBrands)}
						placeholder={"Brand"}
						name={"brand"}
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(models as any[])}
						placeholder={"Model"}
						name={"model"}
						disabled={brandValue ? false : true}
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(vehicleTypes as any[])}
						placeholder={"Type"}
						name={"type"}
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(vehicleStatus as any[])}
						placeholder={"Status"}
						name={"status"}
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(fuelTypes as any[])}
						placeholder={"Fuel Type"}
						name={"fuelType"}
					/>

					<CustomInput
						control={control}
						name="year"
						placeholder="Vehicle factory year"
					/>

					<CustomInput
						control={control}
						name="price"
						placeholder="Vehicle Price"
					/>

					<CustomInput
						control={control}
						name="mileage"
						placeholder="Mileage"
					/>

					<CustomInput
						control={control}
						name="driveType"
						placeholder="Vehicle drive type"
					/>

					<CustomInput
						control={control}
						name="condition"
						placeholder="Vehicle condtion"
					/>

					<CustomInput
						control={control}
						name="door"
						placeholder="Door"
					/>

					<CustomInput
						control={control}
						name="cylinder"
						placeholder="Vehicle cylinder"
					/>

					<CustomInput
						control={control}
						name="color"
						placeholder="Vehicle color"
					/>

					<CustomInput
						control={control}
						name="vin"
						placeholder="Vehicle vin code"
					/>

					<CustomInput
						control={control}
						name="engine"
						placeholder="Engine"
					/>

					<CustomSelect
						control={control}
						selectItems={mapToDropDownData(gearboxTypes as any[])}
						placeholder={"Gearbox"}
						name="gearBox"
					/>

					<CustomInput
						control={control}
						name="description"
						placeholder="Vehicle description"
					/>

					<CustomInput
						control={control}
						name="image"
						// type="file"
						placeholder="Vehicle Images"
						// onChange={handleImagesChange}
					/>
					<CustomButton
						label="Create Listing"
						onPress={handleSubmit(onSubmit)}
						fullWidth
						disabled={false}
						buttonStyles="bg-primary-300"
						textStyles="text-white"
						icon="arrowright"
						iconColor="white"
						iconAlign="right"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default VehicleListing;
