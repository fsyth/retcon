export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export interface CharacterState {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
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
})
