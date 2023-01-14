import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Surah } from 'src/surah/models/surah.model';
import { paginate } from 'src/_common/paginator/paginator.service';
import { Sajda } from '../types/ayah.type';

@Table
@ObjectType()
export class Ayah extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  @Field(() => ID)
  id: string;

  @Column(DataType.TEXT)
  @Field()
  enTranslation: string;

  @Column(DataType.TEXT)
  @Field()
  text: string;

  @Column
  @Field(() => Int)
  numberInSurah: number;

  @Column
  @Field(() => Int)
  number: number;

  @Column
  @Field(() => Int)
  juz: number;

  @Column
  @Field(() => Int)
  manzil: number;

  @Column
  @Field(() => Int)
  page: number;

  @Column
  @Field(() => Int)
  ruku: number;

  @Column
  @Field(() => Int)
  hizbQuarter: number;

  @Column({type : DataType.JSON})
  @Field(() => Sajda)
  sajda: Sajda;

  @ForeignKey(() => Surah)
  @Column({type : DataType.UUID})
  surahId: string;

  @BelongsTo(() => Surah)
  // @Field(() => Surah)
  surah: Surah;

  static async paginate(filter = {}, sort = 'number', page = 0, limit = 15, include: any = []) {
    return paginate<Ayah>(this, filter, sort, page, limit, include);
  }
}
