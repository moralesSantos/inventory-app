import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';

@Controller('inventory')
export class InventoryController {
    constructor(private readonly inventoryService:InventoryService){}


    //create a new inventory item
    @Post()
    async create(@Body() createInventoryDto: CreateInventoryDto){
        return this.inventoryService.create(createInventoryDto); 
    }

    //Get all inventory items
    @Get()
    async findAll(){
        return this.inventoryService.findAll(); 
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        return this.inventoryService.findOne(id); 
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() updateInventoryDto:CreateInventoryDto){
        return this.inventoryService.update(id,updateInventoryDto); 
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        return this.inventoryService.remove(id)
    }

}
