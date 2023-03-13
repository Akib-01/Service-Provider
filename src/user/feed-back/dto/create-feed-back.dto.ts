import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateServiceDto } from 'src/user/service/dto/create-service.dto';

export class CreateFeedBackDto {
  @IsInt({ message: 'id should be integer' })
  @IsNotEmpty({ message: 'Id is required' })
  id: number;
  @IsInt({ message: 'rating should be integer' })
  @IsNotEmpty({ message: 'rating is required' })
  rating: number;
  @IsNotEmpty({ message: 'comment is required' })
  @IsString({ message: 'comment Should be string' })
  @MinLength(5, { message: 'comment should be at least 5 characters' })
  @MaxLength(500, {
    message: 'comment should not be more than 500 characters',
  })
  comment: string;

  Service: CreateServiceDto;
}
