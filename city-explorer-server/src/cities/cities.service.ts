import { Injectable, NotFoundException } from '@nestjs/common';
import { CitiesRepository } from './cities.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesRepository)
    private citiesRepository: CitiesRepository,
  ) {}

  getCities(): Promise<City[]> {
    return this.citiesRepository.getCities();
  }

  async getCityById(id: string): Promise<City> {
    const found = await this.citiesRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`City with ID "${id}" not found`);
    }

    return found;
  }
}
