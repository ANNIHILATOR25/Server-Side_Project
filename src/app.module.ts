import { Module } from '@nestjs/common';
import { DatasourceModule } from './datasource/datasource.module';
import { ExposModule } from './expos/expos.module';
import { HallsModule } from './halls/halls.module';
import { EventsModule } from './events/events.module';
import { StaffModule } from './staff/staff.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ExposModule, HallsModule, DatasourceModule, StaffModule, EventsModule,
    TypeOrmModule.forRoot({
    type: 'postgres', //тип подключаемой БД
    port: 5432, //порт
    database: 'education',
    username: 'postgres', //имя пользователя
    password: 'password', //пароль
    host: 'localhost', //хост, в нашем случае БД развернута локально
    synchronize: false, //
    logging: 'all', 
    entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
  }),],
  controllers: [],
  providers: [],
})
export class AppModule {}

