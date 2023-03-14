import { Module } from '@nestjs/common';
import { AdminListModule } from './admin-list/admin-list.module';
import { ManageModule } from './manager/manage/manage.module';
import { ManageModule } from './manage/manage.module';
import { WorkerListModule } from './worker-list/worker-list.module';

@Module({
  controllers: [],
  providers: [],
  imports: [AdminListModule, ManageModule, WorkerListModule],
})
export class AdminModule {}
