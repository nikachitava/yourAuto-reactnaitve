import { useAxios } from "@/hooks/useAxios"
import { LoginData } from "@/types/LoginData"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    
    return useMutation({
        mutationKey: ['login'],
        mutationFn: login
    })
    
}

const login = async (data: LoginData) => {
    try {
        const response = await useAxios.post("/auth", data);
        return response.data.access_token;
    } catch (error: any) {
        throw new error;
    }
}