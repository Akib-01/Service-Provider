import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateCheckoutDto } from 'src/user/checkout/dto/create-checkout.dto';
import { CreateServiceDto } from 'src/user/service/dto/create-service.dto';
import { CreateUserListDto } from 'src/user/user-list/dto/create-user-list.dto';

export class CreateBookingDto {
  @IsNotEmpty({ message: 'Id is required' })
  @IsInt({ message: 'id should be integer' })
  id: number;
  @IsNotEmpty({ message: 'Time is required' })
  time: string;

  UserList: CreateUserListDto;

  Service: CreateServiceDto;

  Checkout: CreateCheckoutDto;
}
