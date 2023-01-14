import { buildRepository } from "src/_common/database/database-repository.builder";
import { IRepository } from "src/_common/database/repository.interface";
import { Ayah } from "./models/ayah.model";
import { AyahType } from "./types/ayah.type";

const ayahRepo = new (buildRepository(Ayah))() as IRepository<Ayah>;

export const ayahsFactory = async (ayahs:AyahType[]) => {
    return await ayahRepo.bulkCreate(ayahs)
}
