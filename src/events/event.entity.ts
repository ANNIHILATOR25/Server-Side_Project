import { Hall } from 'src/halls/hall.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  EventName: string;
  @Column()
  EventType: string;
  @Column()
  HallId: number;
  @ManyToMany((type) => Hall, (hall) => hall.events)
  @JoinTable({
    name: 'halls',
    joinColumn: { name: 'events_hallid' },
    inverseJoinColumn: { name: 'halls_id' },
  })
  halls: Hall[];
}