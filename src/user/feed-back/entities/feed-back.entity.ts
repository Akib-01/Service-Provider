import { Service } from 'src/user/service/entities/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FeedBack')
export class FeedBack {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  rating: number;
  @Column()
  comment: string;
  @OneToMany(() => Service, (Service) => Service.Feedback)
  Service: Service;
}
