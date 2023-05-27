import { Hall } from 'src/halls/hall.entity';

import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('expos')
export class Expo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true }) 
  fullname: string;
  @Column()
  expotype: string;
  @Column()
  age: number;
  @Column()
  power: number;
  @Column()
  hallid: number;
}
  