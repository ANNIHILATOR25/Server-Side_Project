import { Event } from './event.entity';
import { CreateEventDto } from "src/events/dto/EventDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Repository } from "typeorm";
import { In } from "typeorm";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Hall } from 'src/halls/hall.entity';

@Injectable()
export class EventsService {
  constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
    ) {}


  async create(EventDTO: CreateEventDto): Promise<Event>
    {
       const event = this.eventRepository.create();
       event.EventName = EventDTO.EventName;
       event.EventType = EventDTO.EventType;
       event.HallId = EventDTO.HallId;
       const halls = await this.hallRepository.findBy({
         id: In(EventDTO.halls),
        });
       event.halls = halls;
       await this.eventRepository.save(event);
       return event;
     }
   
  findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
      relations: { halls: true }
    })
  }

  async findAll(): Promise<Event[]> {
    const event = await this.eventRepository.find({
      relations: {
        halls: true
      }
    });
    return event;
  }

  async update(id: number, updatedevent: Event) {
    const event = await this.eventRepository.findOne({ where: { id } });
     event.EventName = updatedevent.EventName;
     event.EventType = updatedevent.EventType;
     event.HallId = updatedevent.HallId;
        await this.eventRepository.save(event);
        return event; 
  }
  remove(id: number) {
      this.eventRepository.delete({ id });
  }
}