import { useAxios } from "@/hooks/useAxios";
import { storeToken } from "@/service/storage/authToken";
import { SignupData } from "@/types/SignupData";
import { useMutation } from "@tanstack/react-query"
import { router } from "expo-router";

export const useSignUp = () => {

    return useMutation({
        mutationFn: signup,
        onSuccess: (access_token) => {
            storeToken(access_token)
            router.replace("/(root)/(tabs)/home")
        },
        onError: (error) => {
            console.log('Detailed Error:', error);
          }
    })
}

const signup = async (data: SignupData) => { 
    try { 
      const response = await useAxios.post("/users", data); 
      return response.data.access_token; 
    } catch (error: any) { 
      if (error.response) {
        throw {
          message: error.response.data.message || 'Signup failed',
          status: error.response.status,
          details: error.response.data
        };
      } else if (error.request) {
        throw {
          message: 'No response received from server',
          type: 'network',
          details: error.request
        };
      } else {
        throw {
          message: 'Error setting up request',
          type: 'request',
          details: error.message
        };
      }
    } 
  }