import { View, Text, Pressable } from "react-native";
import React from "react";
import CustomInput from "../ui/CustomInput";
import { LoginFormSchema } from "@/schemas/LoginFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomButton } from "../ui/CustomButton";
import { useLogin } from "@/service/api/mutations/useLogin";

interface LoginForm {
	handleSignUpForm: () => void;
}

const LoginForm: React.FC<LoginForm> = ({ handleSignUpForm }) => {
	const { control, handleSubmit, setError } = useForm<
		z.infer<typeof LoginFormSchema>
	>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const login = useLogin();

	const onSubmit = (data: any) => {
		login.mutate(data, {
			onError: (error: any) => {
				if (error.response) {
					const errorMessage = "Arasworia";
					// error.response.message || "Login failed";
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
			<Text className="font-rubik-semibold text-2xl mb-10">
				Welcome Back!
			</Text>
			<View className="gap-6">
				<View>
					<View className="gap-3">
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
						{login.isError && (
							<Text className="text-red-500 mb-4">
								{login.error?.message ||
									"An error occurred during signup"}
							</Text>
						)}
					</View>

					<Pressable className="mt-1" onPress={handleSignUpForm}>
						<Text className="text-black-100 text-sm font-rubik">
							I don't have an account
						</Text>
					</Pressable>
				</View>

				<CustomButton
					label="LOGIN"
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

export default LoginForm;
