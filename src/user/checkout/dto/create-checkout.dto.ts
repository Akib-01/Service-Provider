import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateBookingDto } from 'src/user/booking/dto/create-booking.dto';
import { CreatePaymentDto } from 'src/user/payment/dto/create-payment.dto';
import { CreateReportDto } from 'src/user/report/dto/create-report.dto';

export class CreateCheckoutDto {
  @IsInt({ message: 'Id should be integer' })
  @IsNotEmpty({ message: 'Id is required' })
  id: number;
  @IsNotEmpty({ message: 'Destination is required' })
  @IsString({ message: 'Destination Should be string' })
  destination: string;
  @IsNotEmpty({ message: 'Time is required' })
  time: string;

  Booking: CreateBookingDto;

  Payment: CreatePaymentDto;

  Report: CreateReportDto;
}
