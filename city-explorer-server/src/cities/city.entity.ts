import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  name_native: string;

  @Column()
  continent: string;

  @Column()
  country: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  population: string;

  @Column()
  founded: string;

  @Column("text", { array: true })
  landmarks: string[];

  @Column()
  image_url: string;
}
