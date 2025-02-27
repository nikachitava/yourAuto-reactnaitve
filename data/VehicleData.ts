type VehicleBrands = keyof typeof vehicleModels;
export type VehicleModels = typeof vehicleModels[VehicleBrands];

export const vehicleTypes = [
    "Convertible (CV)",
    "Coupe",
    "Sedan",
    "Hatchback",
    "SUV (Sport Utility Vehicle)",
    "Truck",
    "Minivan",
    "Pickup Truck",
    "Wagon",
    "Crossover",
    "Roadster",
    "Van",
    "Motorcycle",
    "Electric Vehicle (EV)",
    "Hybrid",
];

export const carStatus = ["განბაჟებული", "განუბაჟებელი"]

export const fuelTypes = [
    "Petrol",
    "Diesel",
    "Electric",
    "Hybrid (Petrol/Electric)",
    "Hybrid (Diesel/Electric)",
    "CNG (Compressed Natural Gas)",
    "LPG (Liquefied Petroleum Gas)",
    "Hydrogen Fuel Cell",
    "Biofuel",
    "Ethanol",
    "Biodiesel",
    "Flex Fuel",
];

export const gearboxTypes = [
    "Manual",
    "Automatic",
    "Semi-Automatic",
    "CVT (Continuously Variable Transmission)",
    "Dual-Clutch",
    "Tiptronic",
    "AMT (Automated Manual Transmission)",
    "DSG (Direct-Shift Gearbox)",
    "Torque Converter",
    "Sequential",
    "Electric Drive",
];

export const vehicleModels = {
    Toyota: ["Camry", "Corolla", "Highlander", "RAV4", "Tacoma", "Prius", "Land Cruiser"],
    Honda: ["Civic", "Accord", "CR-V", "Pilot", "Fit", "Odyssey", "HR-V"],
    Ford: ["F-150", "Mustang", "Explorer", "Escape", "Focus", "Fusion", "Edge"],
    Chevrolet: ["Silverado", "Equinox", "Malibu", "Tahoe", "Camaro", "Impala", "Trailblazer"],
    Nissan: ["Altima", "Sentra", "Rogue", "Murano", "Pathfinder", "370Z", "Titan"],
    BMW: ["3 Series", "5 Series", "X5", "X3", "M3", "i8", "7 Series"],
    MercedesBenz: ["C-Class", "E-Class", "S-Class", "GLE", "GLC", "A-Class", "CLA"],
    Audi: ["A4", "A6", "Q5", "Q7", "A3", "Q3", "TT"],
    Volkswagen: ["Golf", "Jetta", "Passat", "Tiguan", "Atlas", "Polo", "Beetle"],
    Hyundai: ["Elantra", "Sonata", "Santa Fe", "Tucson", "Palisade", "Accent", "Kona"],
    Kia: ["Soul", "Sportage", "Sorento", "Optima", "Telluride", "Forte", "Stinger"],
    Mazda: ["Mazda3", "Mazda6", "CX-5", "CX-9", "MX-5 Miata", "CX-3", "CX-30"],
    Subaru: ["Impreza", "Outback", "Forester", "Legacy", "Ascent", "Crosstrek", "WRX"],
    Lexus: ["RX", "ES", "NX", "IS", "GX", "UX", "LS"],
    Tesla: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster"],
    Volvo: ["XC90", "XC60", "XC40", "S60", "S90", "V60", "V90"],
    Jeep: ["Wrangler", "Cherokee", "Grand Cherokee", "Compass", "Renegade", "Gladiator"],
    Porsche: ["911", "Cayenne", "Panamera", "Macan", "Taycan", "718 Cayman", "Boxster"],
    Ferrari: ["488", "812 Superfast", "F8 Tributo", "Portofino", "Roma", "SF90 Stradale"],
    Lamborghini: ["Huracan", "Aventador", "Urus", "Gallardo", "Murcielago"],
    Jaguar: ["XF", "XJ", "F-Type", "XE", "E-Pace", "F-Pace", "I-Pace"],
    LandRover: ["Range Rover", "Discovery", "Defender", "Range Rover Sport", "Range Rover Evoque"],
    Bentley: ["Bentayga", "Continental GT", "Flying Spur", "Mulsanne"],
    AstonMartin: ["DB11", "Vantage", "DBS", "Rapide", "Vanquish"],
    Mitsubishi: ["Outlander", "Eclipse Cross", "Lancer", "Mirage", "ASX", "Pajero"],
    Peugeot: ["208", "308", "508", "3008", "5008", "2008"],
    Renault: ["Clio", "Megane", "Captur", "Kadjar", "Talisman"],
    Citroën: ["C3", "C4", "C5 Aircross", "Berlingo", "C1"],
    Fiat: ["500", "Panda", "Tipo", "Punto", "500X"],
    AlfaRomeo: ["Giulia", "Stelvio", "4C", "Giulietta", "Tonale"],
    RollsRoyce: ["Phantom", "Ghost", "Wraith", "Dawn", "Cullinan"],
    Bugatti: ["Chiron", "Veyron", "Divo"],
    Maserati: ["Ghibli", "Levante", "Quattroporte", "GranTurismo"],
    McLaren: ["570S", "720S", "650S", "P1", "GT"],
    Genesis: ["G70", "G80", "G90", "GV70", "GV80"],
    Ram: ["1500", "2500", "3500", "ProMaster", "Dakota"],
    GMC: ["Sierra", "Terrain", "Acadia", "Yukon", "Canyon"],
    Acura: ["MDX", "RDX", "ILX", "TLX", "NSX"],
    Infiniti: ["Q50", "Q60", "QX50", "QX60", "QX80"],
    Mini: ["Cooper", "Clubman", "Countryman"],
    Chrysler: ["Pacifica", "300", "Voyager"],
    Cadillac: ["Escalade", "XT5", "CT5", "XT6", "CT4"],
    Lincoln: ["Navigator", "Aviator", "Corsair", "Nautilus", "MKZ"],
    Buick: ["Enclave", "Encore", "Envision"],
    Suzuki: ["Swift", "Vitara", "Celerio", "Alto"],
    Isuzu: ["D-Max", "MU-X"],
    Dodge: ["Charger", "Challenger", "Durango", "Journey"],
    SEAT: ["Ibiza", "Leon", "Ateca", "Arona"],
    Skoda: ["Octavia", "Superb", "Kodiaq", "Kamiq"],
    Opel: ["Corsa", "Astra", "Insignia", "Mokka", "Grandland X"],
};

export const vehicleBrands = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "BMW",
    "MercedesBenz",
    "Audi",
    "Volkswagen",
    "Hyundai",
    "Kia",
    "Mazda",
    "Subaru",
    "Lexus",
    "Tesla",
    "Volvo",
    "Jeep",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Jaguar",
    "LandRover",
    "Bentley",
    "AstonMartin",
    "Mitsubishi",
    "Peugeot",
    "Renault",
    "Citroën",
    "Fiat",
    "AlfaRomeo",
    "RollsRoyce",
    "Bugatti",
    "Maserati",
    "McLaren",
    "Genesis",
    "Ram",
    "GMC",
    "Acura",
    "Infiniti",
    "Mini",
    "Chrysler",
    "Cadillac",
    "Lincoln",
    "Buick",
    "Suzuki",
    "Isuzu",
    "Dodge",
    "SEAT",
    "Skoda",
    "Opel",
];

export const vehicleStatus = [
    "Costums cleader",
    "Before customs"
]