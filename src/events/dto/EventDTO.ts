import { Hall } from "src/halls/hall.entity"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateNested} from "class-validator"

export class CreateEventDto {
  
  @ApiProperty({example: 'Boletarian Legends', description: 'Event Name'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Event name is required' })
  EventName: string

  @ApiProperty({example: 'Lection', description: 'Event Type'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Event type is required' })
  EventType: string

  @ApiProperty({ example: {id: 2}, description: 'Hall Id' })
  @ValidateNested()
  @Type(() => Hall)
  @IsNotEmpty({ message: 'Hall id is required' })
  HallId: number

  @ApiProperty({ example: {id: 2}, description: 'Halls' })
  @ValidateNested()
  @Type(() => Hall)
  @IsNotEmpty({ message: 'Halls are required' })
  halls: Hall[];
}