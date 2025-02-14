export interface SearchFilterStore {
    brands: string[];
    setBrands: (brand: string) => void;
    models: string[];
    setModels: (model:string) => void;
    minYear: number;
    maxYear: number;
    status: string;
    setStatus: (status: string) => void;
}