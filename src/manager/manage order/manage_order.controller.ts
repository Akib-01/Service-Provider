import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateBookingStatusDto } from '../booking_status/dto/create-booking_status.dto';

import { ManageOrderService } from './manage_order.service';

@Controller('manageOrder')
export class ManageOrderController {
  constructor(private readonly manageOrderService: ManageOrderService) {}

  @Get('/get') 
  findAll() {
    return this.manageOrderService.findOrder();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.manageOrderService.findOneOrder(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateManageOrderDto: CreateBookingStatusDto) {
    return this.manageOrderService.updateOrder(+id, updateManageOrderDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.manageOrderService.removeOrder(+id);
  }
  

}
