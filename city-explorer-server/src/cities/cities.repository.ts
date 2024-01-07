import { EntityRepository, Repository } from 'typeorm';
import { City } from './city.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@EntityRepository(City)
export class CitiesRepository extends Repository<City> {
  private logger = new Logger('CitiesRepository', true);

  async getCities(): Promise<City[]> {
    const query = this.createQueryBuilder('city');

    try {
      const cities = await query.getMany();
      return cities;
    } catch (error) {
      this.logger.error(`Failed to get cities.`, error.stack);
      throw new InternalServerErrorException();
    }
  }
}
