import { Staff } from './staff.entity';
import { CreateStaffDto } from "src/staff/dto/StaffDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Repository } from "typeorm";
import { In } from "typeorm";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Hall } from 'src/halls/hall.entity';

@Injectable()
export class StaffService {
  constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>,
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>
    ) {}


  async create(StaffDTO: CreateStaffDto): Promise<Staff>
    {
       const staff = this.staffRepository.create();
       staff.Name = StaffDTO.Name;
       staff.position = StaffDTO.position;
       staff.HallId = StaffDTO.HallId;
       staff.salary = StaffDTO.salary;
       const halls = await this.hallRepository.findBy({
         id: In(StaffDTO.halls),
        });
       staff.halls = halls;
       await this.staffRepository.save(staff);
       return staff;
     }
   
  findOne(id: number): Promise<Staff> {
    return this.staffRepository.findOne({
      where: { id },
      relations: { halls: true }
    })
  }

  async findAll(): Promise<Staff[]> {
    const staff = await this.staffRepository.find({
      relations: {
        halls: true
      }
    });
    return staff;
  }

  async update(id: number, updatedStaff: Staff) {
    const staff = await this.staffRepository.findOne({ where: { id } });
     staff.Name = updatedStaff.Name;
     staff.position = updatedStaff.position;
     staff.HallId = updatedStaff.HallId;
     staff.salary = updatedStaff.salary;
        await this.staffRepository.save(staff);
        return staff; 
  }
  remove(id: number) {
      this.staffRepository.delete({ id });
  }
}