import { Hall } from './hall.entity';
import { IncompleteExpoDto } from "src/expos/dto/incomplete-expo.dto";
import { CreateHallDto } from "src/halls/dto/HallDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Repository } from "typeorm";
import { In } from "typeorm";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Expo } from 'src/expos/expo.entity';
import { Staff } from 'src/staff/staff.entity';
import { Event } from 'src/events/event.entity';

@Injectable()
export class HallsService {
  constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Expo)
    private readonly expoRepository: Repository<Expo>,
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>
    ) {}


  async create(HallDTO: CreateHallDto): Promise<Hall>
    {
       const hall = this.hallRepository.create();
       hall.HallName = HallDTO.HallName;
       const expos = await this.expoRepository.findBy({
         id: In(HallDTO.expos),
        });
       hall.expos = expos;
       const staff = await this.staffRepository.findBy({
        id: In(HallDTO.staff),
       });
      hall.staff = staff;
       const events = await this.eventRepository.findBy({
        id: In(HallDTO.events),
       });
      hall.events = events;
       await this.hallRepository.save(hall);
       return hall;
     }
   
  findOne(id: number): Promise<Hall> {
    return this.hallRepository.findOne({
      where: { id },
      relations: { expos: true, staff: true, events: true }
    })
  }

  async findAll(): Promise<Hall[]> {
    const halls = await this.hallRepository.find({
      relations: {
        expos: true,
        staff: true,
        events: true
      }
    });
    return halls;
  }

  async update(id: number, updatedHall: Hall) {
    const hall = await this.hallRepository.findOne({ where: { id } });
     hall.HallName = updatedHall.HallName;
        await this.hallRepository.save(hall);
        return hall; 
  }
  remove(id: number) {
      this.hallRepository.delete({ id });
  }
}