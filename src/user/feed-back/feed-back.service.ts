import { Injectable } from '@nestjs/common';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { UpdateFeedBackDto } from './dto/update-feed-back.dto';

@Injectable()
export class FeedBackService {
  create(createFeedBackDto: CreateFeedBackDto) {
    return 'This action adds a new feedBack';
  }

  findAll() {
    return `This action returns all feedBack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feedBack`;
  }

  update(id: number, updateFeedBackDto: UpdateFeedBackDto) {
    return `This action updates a #${id} feedBack`;
  }

  remove(id: number) {
    return `This action removes a #${id} feedBack`;
  }
}
