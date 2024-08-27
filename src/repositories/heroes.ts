export type IHeroes = {
  id: number;
  name?: string;
  full_name?: string;
  media_name?: string;
  localized_name?: string;
  real_name?: string;
  aliases?: string;
  roles?: string;
  role_levels?: string;
  hype?: string;
  bio?: string;
  image?: string;
  icon?: string;
  portrait?: string;
  color?: string;
  legs?: number;
  team?: string;
  base_health_regen?: number;
  base_mana_regen?: number;
  base_movement?: number;
  base_attack_speed?: number;
  turn_rate?: number;
  base_armor?: number;
  attack_range?: number;
  attack_projectile_speed?: number;
  attack_damage_min?: number;
  attack_damage_max?: number;
  attack_rate?: number;
  attack_point?: number;
  attr_primary?: string;
  attr_strength_base?: number;
  attr_strength_gain?: number;
  attr_intelligence_base?: number;
  attr_intelligence_gain?: number;
  attr_agility_base?: number;
  attr_agility_gain?: number;
  vision_day?: number;
  vision_night?: number;
  magic_resistance?: number;
  is_melee?: boolean;
  material?: string;
  json_data?: string;
};

export interface HeroesRepository {
  find(): Promise<IHeroes[]>;
}
