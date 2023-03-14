import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFeedBackDto } from './dto/create-feed-back.dto';
import { FeedBackService } from './feed-back.service';

@Controller('feed-back')
export class FeedBackController {
  constructor(private readonly feedBackService: FeedBackService) {}

  @Post('/insert')
  create(@Body() createFeedBackDto: CreateFeedBackDto) {
    return this.feedBackService.create(createFeedBackDto);
  }

  @Get('/get')
  findAll() {
    return this.feedBackService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.feedBackService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() Dto: CreateFeedBackDto) {
    return this.feedBackService.update(+id, Dto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.feedBackService.remove(+id);
  }
}
