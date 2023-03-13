import { Booking } from 'src/user/booking/entities/booking.entity';
import { Payment } from 'src/user/payment/entities/payment.entity';
import { Report } from 'src/user/report/entities/report.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

Entity('Checkout');
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  destination: string;
  @Column()
  time: string;
  @OneToOne(() => Booking, (Booking) => Booking.Checkout)
  Booking: Booking;
  @ManyToOne(() => Payment, (Payment) => Payment.Checkout)
  Payment: Payment;
  @ManyToOne(() => Report, (Report) => Report.Checkout)
  Report: Report;
}
