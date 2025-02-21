import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryModule } from './inventory/inventory.module';
import * as dotenv from 'dotenv';

dotenv.config(); 
console.log('MongoDB URI: ', process.env.MONGO_URI)

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    InventoryModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
