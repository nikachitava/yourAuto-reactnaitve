import { useAxios } from "@/hooks/useAxios"
import { storeToken } from "@/service/storage/authToken"
import { LoginData } from "@/types/LoginData"
import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { router } from "expo-router"

interface ErrorResponse {
    message: string;
    statusCode: number;
}

export const useLogin = () => {
    
    return useMutation({
        mutationFn: login,
        onSuccess: (access_token) => {
            storeToken(access_token)
            router.replace("/(root)/(tabs)/home")
        }
    })
    
}

const login = async (data: LoginData) => {
    try {
        const response = await useAxios.post("/auth/login", data);
        return response.data.access_token;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError<ErrorResponse>;
            
            if (axiosError.response) {

                const errorMessage = axiosError.response.data.message || 'Login failed';
                throw new Error(errorMessage);
            } else if (axiosError.request) {

                throw new Error('No response from server. Please check your internet connection.');
            } else {
                throw new Error('Error setting up the request.');
            }
        }
        
        throw new Error('An unexpected error occurred');
    }
}