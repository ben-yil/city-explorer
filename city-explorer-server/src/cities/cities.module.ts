import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesRepository } from './cities.repository';
import { CitiesService } from './cities.service';

@Module({
  imports: [TypeOrmModule.forFeature([CitiesRepository])],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
