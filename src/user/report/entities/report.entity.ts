import { Checkout } from 'src/user/checkout/entities/checkout.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Report')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  details: string;

  @OneToMany(() => Checkout, (Checkout) => Checkout.Report)
  Checkout: Checkout;
}
