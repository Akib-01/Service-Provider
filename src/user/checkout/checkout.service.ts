import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from '../booking/entities/booking.entity';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { Checkout } from './entities/checkout.entity';

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(Checkout)
    private checkoutRepo: Repository<Checkout>,
    @InjectRepository(Booking)
    private readonly bookingRepo: Repository<Booking>,
  ) {}
  async create(createCheckoutDto: CreateCheckoutDto): Promise<Checkout> {
    const { BookingId, ...checkoutData } = createCheckoutDto;
    const booking = await this.bookingRepo.findOne({
      where: { id: BookingId },
    });
    const checkout = new Checkout();
    checkout.destination = checkoutData.destination;
    checkout.time = checkoutData.time;
    checkout.Booking = booking;

    return await this.checkoutRepo.save(checkout);
  }

  findAll() {
    return this.checkoutRepo.find();
  }

  findOne(id: number) {
    return this.checkoutRepo.findOneBy({ id });
  }

  async update(
    id: number,
    updateCheckoutDto: CreateCheckoutDto,
  ): Promise<Checkout> {
    const { destination, time, BookingId } = updateCheckoutDto;

    const booking = await this.bookingRepo.findOne({
      where: { id: BookingId },
    });

    const checkout = await this.checkoutRepo.findOne({
      where: { id },
      relations: ['Booking'],
    });

    checkout.destination = destination;
    checkout.time = time;
    checkout.Booking = booking;

    return await this.checkoutRepo.save(checkout);
  }

  remove(id: number) {
    return this.checkoutRepo.delete(id);
  }
}
