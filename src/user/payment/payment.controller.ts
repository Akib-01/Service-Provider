import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/insert')
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Get('/get')
  findAll() {
    return this.paymentService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() Dto: CreatePaymentDto) {
    return this.paymentService.update(+id, Dto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
