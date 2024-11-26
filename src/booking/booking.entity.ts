import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courtName: string;

  @Column()
  userName: string;

  @Column()
  date: Date;

  @Column()
  startTime: string;

  @Column()
  endTime: string;
}
