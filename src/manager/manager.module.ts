import { Module } from '@nestjs/common';
import { ManagerListModule } from './manager_list/manager_list.module';

@Module({
  controllers: [],
  providers: [],
  imports: [ManagerListModule],
})
export class ManagerModule {}
