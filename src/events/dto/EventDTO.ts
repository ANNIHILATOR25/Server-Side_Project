import { Hall } from "src/halls/hall.entity"

export class CreateEventDto {
  id: number;
  EventName: string;
  EventType: string;
  HallId: number;
  halls: Hall[];
}