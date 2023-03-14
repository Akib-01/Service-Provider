import { Module } from '@nestjs/common';
import { AdminListModule } from './admin-list/admin-list.module';
import { ManageModule } from './manage/manage.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AdminListModule, ManageModule],
})
export class AdminModule {}
