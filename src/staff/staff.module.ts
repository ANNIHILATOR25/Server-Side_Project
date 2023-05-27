import { Module } from '@nestjs/common';
import { Staff } from './staff.entity';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { Hall } from 'src/halls/hall.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [StaffController],
  providers: [StaffService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Hall, Staff]),
    ]
})
export class StaffModule {}