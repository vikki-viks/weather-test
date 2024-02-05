import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Actions } from './actionsEntity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  fio: string;

  @Column()
  apiToken: string;

  @OneToMany(() => Actions, (actions) => actions.user)
  actions: Actions[];
}
