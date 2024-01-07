import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';
import { Logger } from '@nestjs/common';

const fs = require('fs');
const path = require('path');
import { getRepository } from 'typeorm';
import { City } from './cities/city.entity';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  try {
    const filePath = path.join(__dirname, '../data', 'cities.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    const repository = getRepository(City);

    if (jsonData && typeof jsonData === 'object' && !Array.isArray(jsonData)) {
      const cities: City[] = jsonData.cities;
      for (const value of cities) {
        // Assuming 'name' is the field that uniquely identifies each record
        const existingEntity = await repository.findOne({
          where: { name: value.name },
        });
        if (!existingEntity) {
          const entity = repository.create(value);
          await repository.save(entity);
          console.log('Data imported successfully');
        } else {
          console.log(`Record with uniqueKey ${value.name} already exists.`);
          // Optionally, update the existing entity if needed
          // repository.save({...existingEntity, ...value});
        }
      }
    } else {
      console.error('jsonData is not an object or is an array');
    }
  } catch (err) {
    console.error('Error while importing data:', err);
  }

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = process.env.PORT;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
