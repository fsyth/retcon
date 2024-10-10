import { ArmorProf, WeaponsProf } from "./cards"

export type Ability =
  'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export type Save = 
  'strSave' | 'dexSave' | 'conSave' | 'intSave' | 'wisSave' | 'chaSave'

export type Skill =
  'acrobatics' | 'animalHandling' | 'arcana' | 'athletics' | 'deception' | 'history' |
  'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' |
  'performance' | 'persuasion' | 'religion' | 'sleightOfHand' | 'stealth' | 'survival'

export interface CharacterState {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number

  strSave: number
  dexSave: number
  conSave: number
  intSave: number
  wisSave: number
  chaSave: number

  acrobatics: number
  animalHandling: number
  arcana: number
  athletics: number
  deception: number
  history: number
  insight: number
  intimidation: number
  investigation: number
  medicine: number
  nature: number
  perception: number
  performance: number
  persuasion: number
  religion: number
  sleightOfHand: number
  stealth: number
  survival: number

  weaponsProf: WeaponsProf
  firearmsProf: boolean

  armorProf: ArmorProf
  shieldProf: boolean

  baseArmorClass: number
  armorMaxDexBonus: number
  armorAddCon: boolean
  armorAddWis: boolean

  //hp: number
  //hitDie: number
  //ac: number
  //speed: number
  //prof: number
  //skills... 0|1|2
  //saves... boolean
  //simpleWeapons: boolean
  //martialWeapons: boolean
  //lightArmor: boolean
  //mediumArmor: boolean
  //heavyArmor: boolean
  //inventory...
}

export const initialCharacter: CharacterState = Object.freeze({
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,

  strSave: 0,
  dexSave: 0,
  conSave: 0,
  intSave: 0,
  wisSave: 0,
  chaSave: 0,

  acrobatics: 0,
  animalHandling: 0,
  arcana: 0,
  athletics: 0,
  deception: 0,
  history: 0,
  insight: 0,
  intimidation: 0,
  investigation: 0,
  medicine: 0,
  nature: 0,
  perception: 0,
  performance: 0,
  persuasion: 0,
  religion: 0,
  sleightOfHand: 0,
  stealth: 0,
  survival: 0,

  weaponsProf: WeaponsProf.None,
  firearmsProf: false,

  armorProf: ArmorProf.None,
  shieldProf: false,

  baseArmorClass: 10,
  armorMaxDexBonus: Infinity,
  armorAddCon: false,
  armorAddWis: false,
})
