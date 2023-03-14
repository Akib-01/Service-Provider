import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateManagerListDto } from './dto/create-manager_list.dto';
import { UpdateManagerListDto } from './dto/update-manager_list.dto';
import { ManagerListService } from './manager_list.service';

@Controller('manager-list')
export class ManagerListController {
  constructor(private readonly managerListService: ManagerListService) {}

  @Post()
  create(@Body() createManagerListDto: CreateManagerListDto) {
    return this.managerListService.create(createManagerListDto);
  }

  @Get()
  findAll() {
    return this.managerListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.managerListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateManagerListDto: UpdateManagerListDto,
  ) {
    return this.managerListService.update(+id, updateManagerListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.managerListService.remove(+id);
  }
}
