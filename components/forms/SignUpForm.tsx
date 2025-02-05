import { View, Text, Pressable } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";
import { SignUpFormSchema } from "@/schemas/SignUpFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomButton } from "../ui/CustomButton";

interface SignUpForm {
	handleSignUpForm: () => void;
}

const SignUpForm: React.FC<SignUpForm> = ({ handleSignUpForm }) => {
	const { control, handleSubmit } = useForm<z.infer<typeof SignUpFormSchema>>(
		{
			resolver: zodResolver(SignUpFormSchema),
			defaultValues: {
				name: "",
				surname: "",
				phone: "",
				email: "",
				password: "",
			},
		}
	);

	const onSubmit = (data: any) => {
		console.log("data: ", data);
	};
	return (
		<View>
			<Text className="font-rubik-semibold uppercase text-xl mb-10 text-black-300">
				Hello To Auto Marketplace
			</Text>
			<View className="gap-6">
				<View>
					<View className="gap-3">
						<CustomInput
							name="name"
							placeholder="Name"
							control={control}
						/>
						<CustomInput
							name="surname"
							placeholder="Surname"
							control={control}
						/>
						<CustomInput
							name="phone"
							placeholder="Phone Number"
							control={control}
							keyboardType="number-pad"
						/>
						<CustomInput
							name="email"
							placeholder="Email"
							control={control}
							keyboardType="email-address"
						/>
						<CustomInput
							name="password"
							placeholder="Password"
							control={control}
							secureTextEntry
						/>
					</View>
					<Pressable className="mt-1" onPress={handleSignUpForm}>
						<Text className="text-black-100 text-sm font-rubik">
							I don't have an account
						</Text>
					</Pressable>
				</View>

				<CustomButton
					label="REGISTER"
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
		</View>
	);
};

export default SignUpForm;
