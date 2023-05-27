import { HallsService } from './halls.service';
import { Controller } from '@nestjs/common';
import { Hall } from './hall.entity';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateHallDto } from './dto/HallDTO';

@Controller('halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}
  @Get()
  findAll() {
    return this.hallsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hallsService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateHall: Hall) {
    return this.hallsService.update(+id, updateHall);
  }
  @Post()
  create(@Body() createHall: CreateHallDto) {
    return this.hallsService.create(createHall);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hallsService.remove(+id);
  }
}