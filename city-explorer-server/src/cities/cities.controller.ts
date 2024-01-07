import { Controller, Get, Param } from '@nestjs/common';
import { City } from './city.entity';
import { CitiesService } from './cities.service';
import { Logger } from '@nestjs/common';

@Controller('cities')
export class CitiesController {
  private logger = new Logger('CitiesController');

  constructor(private citiesService: CitiesService) {}

  @Get()
  getCities(): Promise<City[]> {
    this.logger.verbose(`retrieving all cities.`);
    return this.citiesService.getCities();
  }

  @Get('/:id')
  getCityById(@Param('id') id: string): Promise<City> {
    return this.citiesService.getCityById(id);
  }
}
