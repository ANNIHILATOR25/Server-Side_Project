import { StaffService } from './staff.service';
import { Controller } from '@nestjs/common';
import { Staff } from './staff.entity';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateStaffDto } from './dto/StaffDTO';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}
  @Get()
  findAll() {
    return this.staffService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStaff: Staff) {
    return this.staffService.update(+id, updateStaff);
  }
  @Post()
  create(@Body() createStaff: CreateStaffDto) {
    return this.staffService.create(createStaff);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.remove(+id);
  }
}