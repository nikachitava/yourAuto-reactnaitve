import { z } from "zod";

export const CreateListinSchema = z.object({
	title: z
		.string()
		.min(10, "Title must contain at least 10 character")
		.max(30),
	brand: z.string().min(1, "Brand is required").max(50),
	model: z.string().min(1, "Model is required").max(50),
	type: z.string().min(1, "Type is required").max(50),
	status: z.string().min(1, "Status is required").max(50),
	fuelType: z.string().min(1, "Fuel type is required").max(50),
	year: z.string().min(1).max(4),
	price: z.string().min(2).max(50),
	mileage: z.string().min(2).max(50),
	engine: z.string().min(2).max(50),
	gearBox: z.string().min(1, "gearBox is required").max(500),
	description: z
		.string()
		.min(10, "Description minimum lenght 10 symbol")
		.max(1500),
	driveType: z.string().min(2, "Drivetype minimum lenght 2 symbol").max(50),
	condition: z.string().min(2, "Condition minimum lenght 2 symbol").max(50),
	door: z.string().min(1, "Door is required").max(50),
	cylinder: z.string().min(2, "Cylinder minimum lenght 2 symbol").max(50),
	color: z.string().min(2, "Color minimum lenght 2 symbol").max(50),
	vin: z.string().min(2, "Vincode minimum lenght 2 symbol").max(50),
	image: z.any(),
});