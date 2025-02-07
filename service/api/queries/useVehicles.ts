import { useAxios } from "@/hooks/useAxios"
import { IVehicle } from "@/types/VehicleTypes"
import { useQuery } from "@tanstack/react-query"

export const useVehicles = () => {
    return useQuery<IVehicle[], Error>({
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