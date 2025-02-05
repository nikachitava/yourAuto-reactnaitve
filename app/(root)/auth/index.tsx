import React, { useState } from "react";
import SignUpForm from "@/components/forms/SignUpForm";
import LoginForm from "@/components/forms/LoginForm";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
	const [isSignUpForm, setIsSignUpForm] = useState(false);

	const handleSignUpForm = () => {
		setIsSignUpForm((current) => !current);
	};

	return (
		<SafeAreaView className="flex-1 justify-center px-10">
			{isSignUpForm ? (
				<SignUpForm handleSignUpForm={handleSignUpForm} />
			) : (
				<LoginForm handleSignUpForm={handleSignUpForm} />
			)}
		</SafeAreaView>
	);
};

export default Auth;
