import { ExposService } from './expos.service';
import { Controller } from '@nestjs/common';
import { Expo } from './expo.entity';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateExpoDto } from './dto/ExpoDTO';

@Controller('expos')
export class ExposController {
  constructor(private readonly exposService: ExposService) {}
  @Get()
  findAll() {
    return this.exposService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exposService.findOne(+id);
  }
  @Get('incomplete')
  findIncomplete() {
    this.exposService.findIncomplete();
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateExpo: Expo) {
    return this.exposService.update(+id, updateExpo);
  }
  @Post()
  create(@Body() createExpo: CreateExpoDto) {
    return this.exposService.create(createExpo);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exposService.remove(+id);
  }
}