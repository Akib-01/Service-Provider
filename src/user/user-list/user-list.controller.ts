import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UserListService } from './user-list.service';

@Controller('user')
export class UserListController {
  constructor(private readonly userListService: UserListService) {}

  @Post('insert')
  create(@Body() createUserListDto: CreateUserListDto) {
    return this.userListService.create(createUserListDto);
  }

  @Get('/get')
  findAll() {
    return this.userListService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.userListService.findOne(+id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() createUserListDto: CreateUserListDto,
  ) {
    return this.userListService.update(+id, createUserListDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.userListService.remove(+id);
  }
}
