import { Role } from 'common/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
@Unique('USERS_EMAIL_UNIQUE', ['email'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 100 })
  username: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: 'Admin' | 'User';
}
