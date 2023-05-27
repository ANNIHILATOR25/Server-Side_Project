import { EventsService } from './events.service';
import { Controller } from '@nestjs/common';
import { Event } from './event.entity';
import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { CreateEventDto } from './dto/EventDTO';

@Controller('event')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}
  @Get()
  findAll() {
    return this.eventService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateEvent: Event) {
    return this.eventService.update(+id, updateEvent);
  }
  @Post()
  create(@Body() createEvent: CreateEventDto) {
    return this.eventService.create(createEvent);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}