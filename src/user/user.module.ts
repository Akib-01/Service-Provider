import { Module } from '@nestjs/common';
import { UserListModule } from './user-list/user-list.module';
import { BookingModule } from './booking/booking.module';
import { ServiceModule } from './service/service.module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserListModule, BookingModule, ServiceModule],
})
export class UserModule {}
