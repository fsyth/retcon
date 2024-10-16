export function modifier(score: number) {
  return Math.floor((score - 10) / 2)
}

export function formatModifier(mod: number) {
  return new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(mod)
}

const encodingRadix = 36 // range [2, 36]

export function encodeBoolsToBigIntString(bools: boolean[]) {
  let big = BigInt(0)

  for (let i = 0; i < bools.length; ++i)
    big |= BigInt(bools[i]) << BigInt(i)

  return big.toString(encodingRadix)
}

export function decodeBigIntStringToBools(encodedString: string, length: number): boolean[] {
  const bigIntValue = parseBigInt(encodedString, encodingRadix)
  const boolArray: boolean[] = []

  for (let i = 0; i < length; ++i)
    boolArray.push(Boolean((bigIntValue >> BigInt(i)) & BigInt(1)))

  return boolArray
}

export function parseBigInt(str: string, radix: number) {
  return str.split('').reduce((acc, char) =>
    acc * BigInt(radix) + BigInt(parseInt(char, radix)), BigInt(0))
}

export function translate(key: string) {
  return key in translations
    ? translations[key]
    : key
}

const translations: { [key: string]: string } = {
  level: 'Level',
  strSave: 'Save',
  dexSave: 'Save',
  conSave: 'Save',
  intSave: 'Save',
  wisSave: 'Save',
  chaSave: 'Save',
  acrobatics: 'Acrobatics',
  animalHandling: 'Animal handling',
  arcana: 'Arcana',
  athletics: 'Athletics',
  deception: 'Deception',
  history: 'History',
  insight: 'Insight',
  intimidation: 'Intimidation',
  investigation: 'Investigation',
  medicine: 'Medicine',
  nature: 'Nature',
  perception: 'Perception',
  performance: 'Performance',
  persuasion: 'Persuasion',
  religion: 'Religion',
  sleightOfHand: 'Sleight of hand',
  stealth: 'Stealth',
  survival: 'Survival',

  'ability-score': 'Ability score',
  'saving-throw': 'Saving throw',
  'skill': 'Skill',
  'expertise': 'Expertise',
  'hit-points': 'Hit points',
  'movement': 'Movement',
  'walk-speed': 'Walking speed',
  'weapons': 'Weapons',
  'armor': 'Armor',
  'equipped-armor': 'Armor sets',
  'armor-prof': 'Armor proficiency',
  'shield-prof': 'Shield proficiency',
  'base-armor': 'Base armor',
  'str-score': 'Strength',
  'dex-score': 'Dexterity',
  'con-score': 'Constitution',
  'int-score': 'Intelligence',
  'wis-score': 'Wisdom',
  'cha-score': 'Charisma',
  'acrobatics-bonus': 'Acrobatics',
  'animal-handling-bonus': 'Animal handling',
  'arcana-bonus': 'Arcana',
  'athletics-bonus': 'Athletics',
  'deception-bonus': 'Deception',
  'history-bonus': 'History',
  'insight-bonus': 'Insight',
  'intimidation-bonus': 'Intimidation',
  'investigation-bonus': 'Investigation',
  'medicine-bonus': 'Medicine',
  'nature-bonus': 'Nature',
  'perception-bonus': 'Perception',
  'performance-bonus': 'Performance',
  'persuasion-bonus': 'Persuasion',
  'religion-bonus': 'Religion',
  'sleight-of-hand-bonus': 'Sleight of hand',
  'stealth-bonus': 'Stealth',
  'survival-bonus': 'Survival',
  'misc': 'Miscellaneous',
}
