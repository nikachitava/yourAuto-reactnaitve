import { Control } from "react-hook-form";

export interface CustomSelectTypes {
    control: Control<any>;
    name: string;
    placeholder: string;
    selectItems: any[],
    disabled?: boolean;
}