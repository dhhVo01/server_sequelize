import { Optional } from 'sequelize';
import { Table, Model } from 'sequelize-typescript';

interface UserAttributes {
  id: number;
  fullname: string;
  dob: string;
  email: string;
  phone: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {}

