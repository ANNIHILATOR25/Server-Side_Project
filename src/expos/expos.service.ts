import { Expo } from './expo.entity';
import { IncompleteExpoDto } from "src/expos/dto/incomplete-expo.dto";
import { CreateExpoDto } from "src/expos/dto/ExpoDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Repository } from "typeorm";
import { In } from "typeorm";
import { DatasourceService } from 'src/datasource/datasource.service';
import { Hall } from 'src/halls/hall.entity';


@Injectable()
export class ExposService {
  constructor(private readonly datasourceService: DatasourceService,
    @InjectRepository(Expo)
    private readonly expoRepository: Repository<Expo>,
    @InjectRepository(Hall)
    private readonly hallRepository: Repository<Hall>
    ) {}


  async create(ExpoDTO: CreateExpoDto): Promise<Expo>
    {
       const expo = this.expoRepository.create();
       expo.fullname = ExpoDTO.fullname;
       expo.expotype = ExpoDTO.expotype;
       expo.age = ExpoDTO.age
       expo.power = ExpoDTO.power;
       expo.hallid = ExpoDTO.hallid;
       await this.expoRepository.save(expo);
       return expo;
     }
   
  findOne(id: number): Promise<Expo> {
    return this.expoRepository.findOne({
      where: { id }
    })
  }

  async findAll(): Promise<Expo[]> {
    const expos = await this.expoRepository.find({
      
    });
    return expos;
  }

  async findIncomplete(): Promise<IncompleteExpoDto[]> {
    const expos = await this.expoRepository.find();
    const incompleteExpos: IncompleteExpoDto[] = expos.map((expo) =>
    {
      const incompleteExpo = new IncompleteExpoDto();
      incompleteExpo.id = expo.id;
      incompleteExpo.fullName = expo.fullname;
      incompleteExpo.expotype = expo.expotype;
      incompleteExpo.age = expo.age;
      return incompleteExpo;
    });
    return incompleteExpos; 
  }
  async update(id: number, updatedExpo: Expo) {
    const expo = await this.expoRepository.findOne({ where: { id } });
     expo.fullname = updatedExpo.fullname;
     expo.expotype = updatedExpo.expotype;
     expo.age = updatedExpo.age;
     expo.power = updatedExpo.power;
     expo.hallid = updatedExpo.hallid;
        await this.expoRepository.save(expo);
        return expo; 
  }
  remove(id: number) {
      this.expoRepository.delete({ id });
  }
}
