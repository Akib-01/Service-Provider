import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('insert')
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get('/get')
  findAll() {
    return this.serviceService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateServiceDto: CreateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
