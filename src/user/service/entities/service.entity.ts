import { Booking } from 'src/user/booking/entities/booking.entity';
import { FeedBack } from 'src/user/feed-back/entities/feed-back.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Service')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  type: string;
  @Column()
  isAvailable: boolean;
  @Column()
  price: number;
  @ManyToOne(() => Booking, (Booking) => Booking.Service)
  Booking: Booking;
  @ManyToOne(() => FeedBack, (FeedBack) => FeedBack.Service)
  Feedback: FeedBack;
}
