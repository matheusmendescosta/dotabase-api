import { HeroesRepository } from "@/repositories/heroes";

interface GetHeroesServiceRequest {}

interface GetHeroesServiceResponse {
  heroes: any[];
}

export class GetHeroesService {
  constructor(private heroesRepository: HeroesRepository) {}

  async execute({}: GetHeroesServiceRequest): Promise<GetHeroesServiceResponse> {
    const heroes = await this.heroesRepository.find();

    return { heroes };
  }
}
