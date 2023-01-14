import { generateGqlResponseType } from 'src/_common/graphql/graphql-response.type';
import { Ayah } from './models/ayah.model';

export const GqlAyahResponse = generateGqlResponseType(Ayah)
export const GqlAyahsResponse = generateGqlResponseType(Array(Ayah))