import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@/lib/sequelize";

interface HeroAttributes {
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
}

interface HeroCreationAttributes extends Optional<HeroAttributes, "id"> {}

class Hero extends Model<HeroAttributes, HeroCreationAttributes> implements HeroAttributes {
  public id!: number;
  public name?: string;
  public full_name?: string;
  public media_name?: string;
  public localized_name?: string;
  public real_name?: string;
  public aliases?: string;
  public roles?: string;
  public role_levels?: string;
  public hype?: string;
  public bio?: string;
  public image?: string;
  public icon?: string;
  public portrait?: string;
  public color?: string;
  public legs?: number;
  public team?: string;
  public base_health_regen?: number;
  public base_mana_regen?: number;
  public base_movement?: number;
  public base_attack_speed?: number;
  public turn_rate?: number;
  public base_armor?: number;
  public attack_range?: number;
  public attack_projectile_speed?: number;
  public attack_damage_min?: number;
  public attack_damage_max?: number;
  public attack_rate?: number;
  public attack_point?: number;
  public attr_primary?: string;
  public attr_strength_base?: number;
  public attr_strength_gain?: number;
  public attr_intelligence_base?: number;
  public attr_intelligence_gain?: number;
  public attr_agility_base?: number;
  public attr_agility_gain?: number;
  public vision_day?: number;
  public vision_night?: number;
  public magic_resistance?: number;
  public is_melee?: boolean;
  public material?: string;
  public json_data?: string;
}

Hero.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    media_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    localized_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    real_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aliases: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    roles: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    role_levels: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    hype: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    portrait: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    legs: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    team: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    base_health_regen: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    base_mana_regen: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    base_movement: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    base_attack_speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    turn_rate: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    base_armor: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack_range: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack_projectile_speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack_damage_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack_damage_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack_rate: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    attack_point: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    attr_primary: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    attr_strength_base: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attr_strength_gain: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    attr_intelligence_base: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attr_intelligence_gain: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    attr_agility_base: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attr_agility_gain: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    vision_day: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    vision_night: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    magic_resistance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_melee: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    json_data: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "heroes",
    timestamps: false,
  }
);

export default Hero;
