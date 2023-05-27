import { Module } from '@nestjs/common';
import { Event } from './event.entity';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Hall } from 'src/halls/hall.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Hall, Event]),
    ]
})
export class EventsModule {}