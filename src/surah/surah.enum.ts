import { registerEnumType } from '@nestjs/graphql';
export enum RevelationTypeEnum {
    Meccan = 'Meccan',
    Medinan = 'Medinan'
}
registerEnumType(RevelationTypeEnum , {name : 'RevelationTypeEnum'})
