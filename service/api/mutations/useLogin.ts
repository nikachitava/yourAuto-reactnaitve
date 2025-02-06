import { useAxios } from "@/hooks/useAxios"
import { storeToken } from "@/service/storage/authToken"
import { LoginData } from "@/types/LoginData"
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router"

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
        throw error;
    }
}