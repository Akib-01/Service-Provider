import { Booking } from 'src/user/booking/entities/booking.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User_List')
export class UserList {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  DOB: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  confirmPassword: string;
  @ManyToOne(() => Booking, (Booking) => Booking.UserList)
  Booking: Booking;
}
