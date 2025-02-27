import { View, Text, Pressable } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";
import { SignUpFormSchema } from "@/schemas/SignUpFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomButton } from "../ui/CustomButton";
import { useSignUp } from "@/service/api/mutations/useSignUp";

interface SignUpForm {
	handleSignUpForm: () => void;
}

const SignUpForm: React.FC<SignUpForm> = ({ handleSignUpForm }) => {
	const { control, handleSubmit, setError } = useForm<
		z.infer<typeof SignUpFormSchema>
	>({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			name: "",
			surname: "",
			phone: "",
			email: "",
			password: "",
		},
	});

	const signup = useSignUp();

	const onSubmit = (data: z.infer<typeof SignUpFormSchema>) => {
		console.log(data);
		signup.mutate(data, {
			onError: (error: any) => {
				if (error.response) {
					const errorMessage =
						error.response.data.message || "Signup failed";
					setError("root", {
						type: "manual",
						message: errorMessage,
					});
				} else {
					setError("root", {
						type: "manual",
						message: "An unexpected error occurred",
					});
				}
			},
		});
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
						{signup.isError && (
							<Text className="text-red-500 mb-4">
								{signup.error?.message ||
									"An error occurred during signup"}
							</Text>
						)}
					</View>
					<Pressable className="mt-1" onPress={handleSignUpForm}>
						<Text className="text-black-100 text-sm font-rubik">
							I already have an account
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
