import { Module } from '@nestjs/common';
import { Hall } from './hall.entity';
import { HallsService } from './halls.service';
import { HallsController } from './halls.controller';
import { Expo } from 'src/expos/expo.entity';
import { Staff } from 'src/staff/staff.entity';
import { Event } from 'src/events/event.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [HallsController],
  providers: [HallsService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Expo, Hall, Staff, Event]),
    ]
})
export class HallsModule {}
