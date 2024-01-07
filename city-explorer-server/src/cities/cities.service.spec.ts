import { Test } from '@nestjs/testing';
import { CitiesRepository } from './cities.repository';
import { CitiesService } from './cities.service';
import { NotFoundException } from '@nestjs/common';

const mockCitiesRepository = () => ({
  getCities: jest.fn(),
  findOne: jest.fn(),
});

describe('CitiesService', () => {
  let citiesService: CitiesService;
  let citiesRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CitiesService,
        { provide: CitiesRepository, useFactory: mockCitiesRepository },
      ],
    }).compile();

    citiesService = module.get(CitiesService);
    citiesRepository = module.get(CitiesRepository);
  });

  describe('getCities', () => {
    it('calls CitiesRepository.getCities and returns the result', async () => {
      citiesRepository.getCities.mockResolvedValue('someValue');
      const result = await citiesService.getCities();
      expect(result).toEqual('someValue');
    });
  });

  describe('getCityById', () => {
    it('calls CitiesRepository.findOne and returns the result', async () => {
      const mockCity = {
        id: '123',
        name: 'Munich',
        country: 'Germany',
        name_native: 'München',
        continent: 'Europe',
        latitude: '48.137154',
        longitude: '11.576124',
        population: '1472000',
        founded: '1158',
        landmarks: ['Bavaria statue', 'Marienplatz', 'ottonova office'],
        image_url:
          'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
      };

      citiesRepository.findOne.mockResolvedValue(mockCity);
      const result = await citiesService.getCityById('someId');
      expect(result).toEqual(mockCity);
    });

    it('calls CitiesRepository.findOne and handles an error', async () => {
      citiesRepository.findOne.mockResolvedValue(null);
      expect(citiesService.getCityById('someId')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
