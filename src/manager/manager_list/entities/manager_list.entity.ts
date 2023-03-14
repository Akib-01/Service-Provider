import { Salary } from 'src/admin/salary/entities/salary.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Manager_list')
export class ManagerList {
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
  @ManyToOne(() => Salary, (salary) => salary.Manager)
  Salary: Salary;
}
