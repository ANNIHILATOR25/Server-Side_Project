import { Expo } from "src/expos/expo.entity"
import { Staff } from "src/staff/staff.entity"
import { Event } from 'src/events/event.entity';

export class CreateHallDto {
  id: number;
  HallName: string;
  expos: Expo[];
  staff: Staff[];
  events: Event[];
}