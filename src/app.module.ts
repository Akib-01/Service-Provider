import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [UserModule, AdminModule, ManagerModule, WorkerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
