/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bathroom as PrismaBathroom } from "@prisma/client";
import { BathroomWhereInput } from "./BathroomWhereInput";
import { Bathroom } from "./Bathroom";

export class BathroomServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BathroomCountArgs, "select">): Promise<number> {
    return this.prisma.bathroom.count(args);
  }

  async bathrooms<T extends Prisma.BathroomFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BathroomFindManyArgs>
  ): Promise<PrismaBathroom[]> {
    return this.prisma.bathroom.findMany<Prisma.BathroomFindManyArgs>(args);
  }
  async bathroom<T extends Prisma.BathroomFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BathroomFindUniqueArgs>
  ): Promise<PrismaBathroom | null> {
    return this.prisma.bathroom.findUnique(args);
  }
  async createBathroom<T extends Prisma.BathroomCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BathroomCreateArgs>
  ): Promise<PrismaBathroom> {
    return this.prisma.bathroom.create<T>(args);
  }
  async updateBathroom<T extends Prisma.BathroomUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BathroomUpdateArgs>
  ): Promise<PrismaBathroom> {
    return this.prisma.bathroom.update<T>(args);
  }
  async deleteBathroom<T extends Prisma.BathroomDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BathroomDeleteArgs>
  ): Promise<PrismaBathroom> {
    return this.prisma.bathroom.delete(args);
  }
  async FilterAndSortBathrooms(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FilterAndSortBathroomsV2(
    args: BathroomWhereInput
  ): Promise<Bathroom[]> {
    throw new Error("Not implemented");
  }
}