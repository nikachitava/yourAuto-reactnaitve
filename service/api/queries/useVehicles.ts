import { useAxios } from "@/hooks/useAxios"
import { useQuery } from "@tanstack/react-query"

export const useVehicles = () => {
    return useQuery({
        queryKey: ['vehicles'],
        queryFn: fetchVehicles
    })
}

const fetchVehicles = async () => {
    try {
        const {data} = await useAxios.get('/vehicle')
        return data;
    } catch (error: any) {
        throw new error;
    }
}