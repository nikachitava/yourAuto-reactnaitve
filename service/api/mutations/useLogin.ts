import { useAxios } from "@/hooks/useAxios"
import { storeToken } from "@/service/storage/authToken"
import { saveUserData } from "@/service/storage/userData"
import { LoginData } from "@/types/LoginData"
import { UserType } from "@/types/UserType"
import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { router } from "expo-router"
import { jwtDecode } from 'jwt-decode'

interface ErrorResponse {
    message: string;
    statusCode: number;
}

interface TokenPayload {
    _id: string
}

export const useLogin = () => {
    
    return useMutation({
        mutationFn: login,
        onSuccess: async (access_token: string) => {
            storeToken(access_token)

            const decodedData = jwtDecode<TokenPayload & {_doc: UserType}>(access_token);


            const userData = decodedData._doc; 
            await saveUserData(userData);
            
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

const fetchUser = async (_id: string) => {
    try {
        const { data } = await useAxios.get(`/users/${_id}`);
        return data;
    } catch (error) {
        throw error;
    }
}