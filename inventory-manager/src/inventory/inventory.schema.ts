import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Inventory extends Document {
    @Prop({required: true})
    name:string;

    @Prop({required: true})
    category: string;

    @Prop({required:true, default: 1})
    quantity: number;

}

export const InventorySchema = SchemaFactory.createForClass(Inventory); 