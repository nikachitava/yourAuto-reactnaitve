import { VehicleBrands } from "./VehicleTypes";

export interface SearchFilterStore {
    brands: VehicleBrands[];
    setBrands: (brand: VehicleBrands) => void;
    models: string[];
    setModels: (model:string) => void;
    minYear: number;
    maxYear: number;
    status: string;
    setStatus: (status: string) => void;
}