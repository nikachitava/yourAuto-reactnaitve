import { useAxios } from "@/hooks/useAxios"
import { IVehicle } from "@/types/VehicleTypes"
import { useQuery } from "@tanstack/react-query"

export const useVehicle = (_id: string) => {

    return useQuery<IVehicle, Error>({
        queryKey: ['vehicle', _id],
        queryFn: () => fetchVehicle(_id)
    })
}

const fetchVehicle = async (_id: string) => {
    try {
        const {data} = await useAxios.get(`/vehicle/${_id}`)
        return data;
    } catch (error: any) {
        throw new error;
    }
}