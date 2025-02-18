import { SearchFilterStore } from '@/types/SearchFilterStore'
import { VehicleBrands } from '@/types/VehicleTypes'
import { create } from 'zustand'

export const useSearchFilterStore = create<SearchFilterStore>((set) => ({
    brands: [],
    setBrands: (brand: VehicleBrands) => set((state) => ({
        brands: state.brands.includes(brand)
            ? state.brands.filter(item => item !== brand)
            : [...state.brands, brand]
    })),
    models: [],
    setModels: (model) => set((state) => ({
        models: state.models.includes(model)
            ? state.models.filter(item => item !== model)
            : [...state.models, model]
    })),
    minYear: 0,
    maxYear: 0,
    status: '',
    setStatus: (status) => set({status: status})    
}))