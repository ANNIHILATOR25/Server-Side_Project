import { Expo } from "src/expos/expo.entity"
import { Staff } from "src/staff/staff.entity"
import { Event } from "src/events/event.entity"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateNested} from "class-validator"

export class CreateHallDto {

  @ApiProperty({ example: 'Lathria', description: 'Hall Name' })
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Name is required' })
  HallName: string

  @ApiProperty({ example: {id: 2}, description: 'Expo Id' })
  @ValidateNested()
  @Type(() => Expo)
  @IsNotEmpty({ message: 'Expo id is required' })
  expos: Expo[]

  @ApiProperty({ example: {id: 1}, description: 'Staff Id' })
  @ValidateNested()
  @Type(() => Staff)
  @IsNotEmpty({ message: 'Staff id is required' })
  staff: Staff[]

  @ApiProperty({ example: {id: 3}, description: 'Event Id' })
  @ValidateNested()
  @Type(() => Event)
  @IsNotEmpty({ message: 'Event id is required' })
  events: Event[];
}