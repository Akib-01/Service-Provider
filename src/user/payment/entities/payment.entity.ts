import { Checkout } from 'src/user/checkout/entities/checkout.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  paymentType: string;
  @Column()
  paymentInfo: string;
  @OneToMany(() => Checkout, (Checkout) => Checkout.Payment)
  Checkout: Checkout[];
}
