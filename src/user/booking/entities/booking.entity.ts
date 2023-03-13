import { Service } from 'src/user/service/entities/service.entity';
import { UserList } from 'src/user/user-list/entities/user-list.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { OneToMany } from 'typeorm/decorator/relations/OneToMany';

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
}
