import { Module } from '@nestjs/common';
import { Expo } from './expo.entity';
import { ExposService } from './expos.service';
import { ExposController } from './expos.controller';
import { Hall } from 'src/halls/hall.entity';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [ExposController],
  providers: [ExposService],
  imports: [DatasourceModule, TypeOrmModule.forFeature([Expo, Hall]),
    ]
})
export class ExposModule {}
