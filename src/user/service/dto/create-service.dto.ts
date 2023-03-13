import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateBookingDto } from 'src/user/booking/dto/create-booking.dto';

export class CreateServiceDto {
  @IsNotEmpty({ message: 'Id is required' })
  @IsInt({ message: 'id should be integer' })
  id: number;
  @IsNotEmpty({ message: 'Service Name is required' })
  @IsString({ message: 'Service Name Should be string' })
  ServiceName: string;
  @IsNotEmpty({ message: 'Description is required' })
  @MinLength(2, { message: 'Description should be at least 5 characters' })
  @MaxLength(10, {
    message: 'Description should not be more than 1000 characters',
  })
  description: string;
  @IsNotEmpty({ message: 'Type is required' })
  @IsString({ message: 'Type Should be string' })
  type: string;
  @IsNotEmpty({ message: 'Availablity is required' })
  @IsBoolean({ message: 'Availablity should be Boolean' })
  isAvailable: boolean;
  @IsNotEmpty({ message: 'Price is required' })
  @IsInt({ message: 'Price should be integer' })
  price: number;

  Booking: CreateBookingDto;
}
