import Costume from '../db/models/costume';
import { DBUtilsError } from '../utils/errors';

export async function createCostume(
    shirtDesc: createCostumeType,
): Promise<createCostumeType> {
    const newCostume = await new Costume(shirtDesc).save();
    return newCostume;
}

export async function getCostumes(): Promise<createCostumeType[]> {
    const costumes = await Costume.find();
    return costumes;
}

export async function getCostumeById(
    id: string,
): Promise<createCostumeType | DBUtilsError> {
    const costume = await Costume.findById(id);
    if (costume) return costume;
    throw new DBUtilsError('getCostumeById');
}
