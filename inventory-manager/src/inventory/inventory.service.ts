import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Inventory } from './inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import {CreateInventoryDto} from './dto/create-inventory.dto'; 

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name) private inventoryModel: Model<Inventory>,) {

    }
//Create a new inventory item
    async create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const newItem = new this.inventoryModel(createInventoryDto);
    return newItem.save();
}

//Get all inventory items
async findAll(): Promise<Inventory[]>{
  return this.inventoryModel.find().exec(); 
}

// Get a single inventory item by ID
async findOne(id: string): Promise<Inventory | null> {
  const item = await this.inventoryModel.findById(id).exec(); 
  if(!item) throw new NotFoundException(`Item with ID ${id} not found`); 
  return item; 
}

async update(id: string, updateInventoryDto: CreateInventoryDto): Promise<Inventory | null> {
  const updateItem = this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, {new:true}).exec(); 
  if(!updateItem) throw new NotFoundException(`Item with ID ${id} not found`); 
  return updateItem;
}

async remove(id: string): Promise<Inventory | null>{
  const deleteItem =  this.inventoryModel.findByIdAndDelete(id).exec();
  if(!deleteItem) throw new NotFoundException(`Item with ID ${id} not found`); 
  return deleteItem;
}


}
