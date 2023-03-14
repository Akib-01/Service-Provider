import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('/insert')
  create(@Body() createCheckoutDto: CreateCheckoutDto) {
    return this.checkoutService.create(createCheckoutDto);
  }

  @Get('/get')
  findAll() {
    return this.checkoutService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.checkoutService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() Dto: CreateCheckoutDto) {
    return this.checkoutService.update(+id, Dto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.checkoutService.remove(+id);
  }
}
