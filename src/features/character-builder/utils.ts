export function modifier(score: number) {
  return Math.floor((score - 10) / 2)
}

export function formatModifier(mod: number) {
  return new Intl.NumberFormat('en-US', {signDisplay: 'always'}).format(mod)
}

export function translate(key: string) {
  return key in translations
    ? translations[key]
    : key
}

const translations: { [key: string]: string } = {
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
}
