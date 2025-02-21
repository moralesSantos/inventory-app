import { IsNotEmpty,IsString, IsNumber } from "class-validator";


export class CreateInventoryDto {
    @IsNotEmpty()
    @IsString()
    name: string;
     
    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number; 
}