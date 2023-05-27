import { Expo } from 'src/expos/expo.entity';
import { Staff } from 'src/staff/staff.entity';
import { Event } from 'src/events/event.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('halls')
export class Hall {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  HallName: string;
  @ManyToMany((type) => Expo, (expo) => expo.id)
  @JoinTable({
    name: 'expos',
    joinColumn: { name: 'halls_id' },
    inverseJoinColumn: { name: 'expos_hallid' },
  })
  expos: Expo[];
  @ManyToMany((type) => Staff, (staff) => staff.id)
  @JoinTable({
    name: 'staff',
    joinColumn: { name: 'halls_id' },
    inverseJoinColumn: { name: 'staff_hallid' },
  })
  staff: Staff[];
  @ManyToMany((type) => Event, (event) => event.id)
  @JoinTable({
    name: 'events',
    joinColumn: { name: 'halls_id' },
    inverseJoinColumn: { name: 'events_hallid' },
  })
  events: Event[];
}