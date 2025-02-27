export interface IVehicle {
    _id: string;
    owner: IOwner;
    title: string;
    brand: VehicleBrands;
    model: string;
    type: string;
    status: string;
    fuelType: string;
    year: string;
    price: string;
    mileage: string;
    engine: string;
    gearBox: string;
    description: string;
    driveType: string;
    condition: string;
    door: string;
    cylinder: string;
    color: string;
    vin: string;
    image: string[];
}


export interface IOwner {
    name: string;
    surname: string;
    phone: string;
    _id: string;
}

export interface IVehicleCardProps {
    _id: string;
    brand: string;
    model: string;
    fuelType: string;
    price: string;
    gearBox: string;
    mileage: string;
    image: string[];
    year: string;
}

export type VehicleBrands =
    | "Toyota"
    | "Honda"
    | "Ford"
    | "Chevrolet"
    | "Nissan"
    | "BMW"
    | "MercedesBenz"
    | "Audi"
    | "Volkswagen"
    | "Hyundai"
    | "Kia"
    | "Mazda"
    | "Subaru"
    | "Lexus"
    | "Tesla"
    | "Volvo"
    | "Jeep"
    | "Porsche"
    | "Ferrari"
    | "Lamborghini"
    | "Jaguar"
    | "LandRover"
    | "Bentley"
    | "AstonMartin"
    | "Mitsubishi"
    | "Peugeot"
    | "Renault"
    | "Citroën"
    | "Fiat"
    | "AlfaRomeo"
    | "RollsRoyce"
    | "Bugatti"
    | "Maserati"
    | "McLaren"
    | "Genesis"
    | "Ram"
    | "GMC"
    | "Acura"
    | "Infiniti"
    | "Mini"
    | "Chrysler"
    | "Cadillac"
    | "Lincoln"
    | "Buick"
    | "Suzuki"
    | "Isuzu"
    | "Dodge"
    | "SEAT"
    | "Skoda"
    | "Opel";
    
