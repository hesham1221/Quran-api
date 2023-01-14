import {
  Model,
  Table,
  Column,
  Default,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';
import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
@Table({
  tableName: 'Users',
  timestamps: true,
})
export class User extends Model {
  @PrimaryKey
  @Default(() => DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: string;

  @Column({ allowNull: true })
  @Field({ nullable: true })
  email?: string;

  @Column({ allowNull: true })
  @Field({ nullable: true })
  notVerifiedEmail: string;

  @Column
  password: string;
}
