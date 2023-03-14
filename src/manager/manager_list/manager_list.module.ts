import { Module } from '@nestjs/common';
import { ManagerListController } from './manager_list.controller';
import { ManagerListService } from './manager_list.service';

@Module({
  controllers: [ManagerListController],
  providers: [ManagerListService],
})
export class ManagerListModule {}
