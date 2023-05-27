import { Hall } from 'src/halls/hall.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Name: string;
  @Column()
  position: string;
  @Column()
  HallId: number;
  @Column()
  salary: number;
  @ManyToMany((type) => Hall, (hall) => hall.id)
  @JoinTable({
    name: 'halls',
    joinColumn: { name: 'staff_hallid' },
    inverseJoinColumn: { name: 'halls_id' },
  })
  halls: Hall[];
}