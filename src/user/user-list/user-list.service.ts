import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { UserList } from './entities/user-list.entity';

@Injectable()
export class UserListService {
  constructor(
    @InjectRepository(UserList)
    private UserListRepo: Repository<UserList>,
  ) {}
  create(Dto: CreateUserListDto) {
    return this.UserListRepo.save(Dto);
  }

  findAll() {
    return this.UserListRepo.find();
  }

  findOne(id: number) {
    return this.UserListRepo.findOneBy({ id });
  }

  update(id: number, Dto: CreateUserListDto) {
    return this.UserListRepo.update(id, Dto);
  }

  remove(id: number) {
    return this.UserListRepo.delete(id);
  }
}
