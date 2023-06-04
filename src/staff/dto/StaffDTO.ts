import { Hall } from "src/halls/hall.entity"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateNested} from "class-validator"

export class CreateStaffDto {

  @ApiProperty({example: 'Garl Vinland', description: 'Staff Name'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Staff name is required' })
  Name: string

  @ApiProperty({example: 'Security', description: 'Staff Occupation'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Staff occupation is required' })
  position: string

  @ApiProperty({ example: {id: 2}, description: 'Hall Id' })
  @ValidateNested()
  @Type(() => Hall)
  @IsNotEmpty({ message: 'Hall id is required' })
  HallId: number

  @ApiProperty({example: 1000, description: 'Salary Amount'})
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(10000)
  @IsNotEmpty({ message: 'Salary Amount is required' })
  salary: number;
  
  @ApiProperty({ example: {id: 2}, description: 'Halls' })
  @ValidateNested()
  @Type(() => Hall)
  @IsNotEmpty({ message: 'Halls are required' })
  halls: Hall[];
}