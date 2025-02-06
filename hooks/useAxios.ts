import axios from "axios"

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export const useAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
      }
});