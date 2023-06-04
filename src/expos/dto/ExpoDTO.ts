import { Hall } from "src/halls/hall.entity"
import { Type } from "class-transformer"
import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateNested} from "class-validator"

export class CreateExpoDto {

  @ApiProperty({example: 'Dragon Bone Smasher', description: 'Expo Name'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Expo name is required' })
  fullname: string

  @ApiProperty({example: 'Sword', description: 'Expo Type'})
  @IsString()
  @Length(2, 50)
  @IsNotEmpty({ message: 'Expo type is required' })
  expotype: string

  @ApiProperty({example: 1337, description: 'Expo Age'})
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(2023)
  @IsNotEmpty({ message: 'Expo age is required' })
  age: number

  @ApiProperty({example: 200, description: 'Expo Power'})
  @IsNumber()
  @IsInt()
  @Min(0)
  @Max(9000)
  @IsNotEmpty({ message: 'Expo power is required' })
  power: number

  @ApiProperty({ example: {id: 2}, description: 'Hall Id' })
  @ValidateNested()
  @Type(() => Hall)
  @IsNotEmpty({ message: 'Hall id is required' })
  hallid: number

}
