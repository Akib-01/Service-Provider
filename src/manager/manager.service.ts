import { Injectable } from '@nestjs/common';
import { CreateManagerDto } from './dto/create-manager.dto';

@Injectable()
export class ManagerService {
  create(createManagerDto: CreateManagerDto) {
    return 'This action adds a new manager';
  }

  findAll() {
    return `This action returns all manager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manager`;
  }

  remove(id: number) {
    return `This action removes a #${id} manager`;
  }
}
