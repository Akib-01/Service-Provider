import { Checkout } from 'src/user/checkout/entities/checkout.entity';
import { Service } from 'src/user/service/entities/service.entity';
import { UserList } from 'src/user/user-list/entities/user-list.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Booking')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  time: string;
  @OneToMany(() => UserList, (UserList) => UserList.Booking)
  UserList: UserList[];
  @OneToMany(() => Service, (Service) => Service.Booking)
  Service: Service[];
  @OneToOne(() => Checkout, (Checkout) => Checkout.Booking)
  @JoinColumn()
  Checkout: Checkout;
}
