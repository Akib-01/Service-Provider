import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('/insert')
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportService.create(createReportDto);
  }

  @Get('/get')
  findAll() {
    return this.reportService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.reportService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() Dto: CreateReportDto) {
    return this.reportService.update(+id, Dto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.reportService.remove(+id);
  }
}
