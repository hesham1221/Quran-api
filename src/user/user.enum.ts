import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleEnum {
  USER = 'USER'
}
registerEnumType(UserRoleEnum, { name: 'UserRoleEnum' });

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}
registerEnumType(GenderEnum, { name: 'GenderEnum' });

export enum LangEnum {
  EN = 'EN',
  AR = 'AR'
}
registerEnumType(LangEnum, { name: 'LangEnum' });

export enum DeviceEnum {
  DESKTOP = 'DESKTOP',
  IOS = 'IOS',
  ANDROID = 'ANDROID'
}
registerEnumType(DeviceEnum, { name: 'DeviceEnum' });

export enum UserVerificationCodeUseCaseEnum {
  PASSWORD_RESET = 'PASSWORD_RESET',
  PHONE_VERIFICATION = 'PHONE_VERIFICATION',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION'
}
registerEnumType(UserVerificationCodeUseCaseEnum, {
  name: 'UserVerificationCodeUseCaseEnum'
});

export enum FamilyMemberRelationEnum {
  SON = 'SON',
  DAUGHTER = 'DAUGHTER',
  WIFE = 'WIFE',
  HUSBAND = 'HUSBAND',
  FATHER = 'FATHER',
  MOTHER = 'MOTHER',
  BROTHER = 'BROTHER',
  SISTER = 'SISTER',
  SELF = 'SELF'
}
registerEnumType(FamilyMemberRelationEnum, {
  name: 'FamilyMemberRelationEnum'
});

export enum MedicalRecordFamilyDiseasesHistoryEnum {
  FATHER = 'FATHER',
  MOTHER = 'MOTHER',
  GRANDFATHER = 'GRANDFATHER',
  GRANDMOTHER = 'GRANDMOTHER',
  UNCLE = 'UNCLE',
  AUNT = 'AUNT'
}
registerEnumType(MedicalRecordFamilyDiseasesHistoryEnum, {
  name: 'MedicalRecordFamilyDiseasesHistoryEnum'
});

export enum MaritalStatusEnum {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  WIDOWED = 'WIDOWED',
  DIVORCED = 'DIVORCED',
  ENGAGED = 'ENGAGED'
}
registerEnumType(MaritalStatusEnum, {
  name: 'MaritalStatusEnum'
});

export enum BloodTypeEnum {
  'A_PLUS' = 'A+',
  'A_MINUS' = 'A-',
  'B_PLUS' = 'B+',
  'B_MINUS' = 'B-',
  'AB_PLUS' = 'AB+',
  'AB_MINUS' = 'AB-',
  'O_PLUS' = 'O+',
  'O_MINUS' = 'O-'
}
registerEnumType(BloodTypeEnum, {
  name: 'BloodTypeEnum'
});

export enum MedicalRecordResolverNamesEnum {
  CHRONIC_DISEASES = 'CHRONIC_DISEASES',
  CURRENT_MEDICATION = 'CURRENT_MEDICATION',
  FAMILY_HISTORY = 'FAMILY_HISTORY',
  ALLERGIES = 'ALLERGIES'
}
