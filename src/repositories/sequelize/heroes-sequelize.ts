import { HeroesRepository, IHeroes } from "../heroes";
import Hero from "@/models/heroes";

export class SequelizeHeroesRepository implements HeroesRepository {
  async find(): Promise<IHeroes[]> {
    const heroes = await Hero.findAll();

    return heroes;
  }
}
