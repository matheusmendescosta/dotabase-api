import { SequelizeHeroesRepository } from "@/repositories/sequelize/heroes-sequelize";
import { GetHeroesService } from "@/services/get-heroes";
import { Request, Response } from "express";

export async function ListHeroes(req: Request, res: Response) {
  const getHeroesService = new GetHeroesService(new SequelizeHeroesRepository());

  const { heroes } = await getHeroesService.execute({});

  return res.status(200).json(heroes);
}
