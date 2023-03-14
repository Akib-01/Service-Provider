import { Injectable } from '@nestjs/common';
import { CreateManagerListDto } from './dto/create-manager_list.dto';
import { UpdateManagerListDto } from './dto/update-manager_list.dto';

@Injectable()
export class ManagerListService {
  create(createManagerListDto: CreateManagerListDto) {
    return 'This action adds a new managerList';
  }

  findAll() {
    return `This action returns all managerList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} managerList`;
  }

  update(id: number, updateManagerListDto: UpdateManagerListDto) {
    return `This action updates a #${id} managerList`;
  }

  remove(id: number) {
    return `This action removes a #${id} managerList`;
  }
}
