import { Hall } from "src/halls/hall.entity"

export class CreateStaffDto {
  id: number;
  Name: string;
  position: string;
  HallId: number;
  salary: number;
  halls: Hall[];
}