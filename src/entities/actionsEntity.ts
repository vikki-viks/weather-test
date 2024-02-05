import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './usersEntity';

@Entity()
export class Actions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  actionTime: number;

  @Column()
  requestResult: number;

  @Column({ nullable: true })
  tempC: number;

  @ManyToOne(() => Users, (user) => user.actions)
  user: Users | number;
}
