import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/insert')
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get('/get')
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateBookingDto: CreateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
