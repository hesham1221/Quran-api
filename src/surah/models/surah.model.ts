import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Ayah } from 'src/ayah/models/ayah.model';
import { paginate } from 'src/_common/paginator/paginator.service';

@Table({
    tableName : 'Surahs'
})
@ObjectType()
export class Surah extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: string;

  @Column
  @Field()
  name: string;

  @Column
  @Field(() => Int)
  number: number;

  @Column
  @Field()
  enName: string;

  @Column
  @Field()
  enTranslation: string;

  @Column
  @Field()
  revelationType: string;

  @HasMany(() => Ayah , { onDelete: 'cascade'})
  @Field(() => [Ayah],{nullable : true}) 
  ayahs? : Ayah[]

  static async paginate(filter = {}, sort = '-createdAt', page = 0, limit = 15, include: any = []) {
    return paginate<Surah>(this, filter, sort, page, limit, include);
  }
}
