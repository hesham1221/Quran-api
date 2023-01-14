import { generateGqlResponseType } from 'src/_common/graphql/graphql-response.type';
import { Surah } from "./models/surah.model";

export const GqlSurahResponse = generateGqlResponseType(Surah)
export const GqlSurahsResponse = generateGqlResponseType(Array(Surah) , true)