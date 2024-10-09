export interface CardState {
  id: string,
  pointCost: number,
  flavor: string,
  description: string,
  effect: CardEffect,
  copiesAvailable: number,
  category: Category,
  slot?: Slot
}

export interface CardEffect {
  str?: number
  dex?: number
  con?: number
  int?: number
  wis?: number
  cha?: number
  strSave?: number
  dexSave?: number
  conSave?: number
  intSave?: number
  wisSave?: number
  chaSave?: number
  acrobatics?: number
  animalHandling?: number
  arcana?: number
  athletics?: number
  deception?: number
  history?: number
  insight?: number
  intimidation?: number
  investigation?: number
  medicine?: number
  nature?: number
  perception?: number
  performance?: number
  persuasion?: number
  religion?: number
  sleightOfHand?: number
  stealth?: number
  survival?: number
}

export type Category =
  'ability-score' | 'saving-throw' | 'skill' | 'expertise'

export type Slot =
  'str-score' | 'dex-score' | 'con-score' | 'int-score' | 'wis-score' | 'cha-score' |
  'str-save' | 'dex-save' | 'con-save' | 'int-save' | 'wis-save' | 'cha-save' |
  'acrobatics-bonus' | 'animal-handling-bonus' | 'arcana-bonus' | 'athletics-bonus' |
  'deception-bonus' | 'history-bonus' | 'insight-bonus' | 'intimidation-bonus' |
  'investigation-bonus' | 'medicine-bonus' | 'nature-bonus' | 'perception-bonus' |
  'performance-bonus' | 'persuasion-bonus' | 'religion-bonus' | 'sleight-of-hand-bonus' |
  'stealth-bonus' | 'survival-bonus'

export const proficiencyBonus = 4
export const prof = `+${proficiencyBonus}`
export const expertiseBonus = 2 * proficiencyBonus
export const expertise = `+${expertiseBonus}`

export const allCards: CardState[] = [
  // Strength ability score
  {
    id: 'str-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda strong.",
    description: 'Strength 20 (+5)',
    effect: {str: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-18',
    pointCost: 13,
    flavor: "I trained hard to be this strong.",
    description: 'Strength 18 (+4)',
    effect: {str: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-16',
    pointCost: 9,
    flavor: "I'm naturally very strong.",
    description: 'Strength 16 (+3)',
    effect: {str: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-14',
    pointCost: 4,
    flavor: "I'm pretty strong actually.",
    description: 'Strength 14 (+2)',
    effect: {str: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-12',
    pointCost: 2,
    flavor: "I'm naturally a little strong.",
    description: 'Strength 12 (+1)',
    effect: {str: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-8',
    pointCost: -2,
    flavor: "I'm naturally a little weak.",
    description: 'Strength 8 (-1)',
    effect: {str: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-6',
    pointCost: -4,
    flavor: "I'm honestly pretty weak.",
    description: 'Strength 6 (-2)',
    effect: {str: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-4',
    pointCost: -6,
    flavor: "I'm very weak.",
    description: 'Strength 4 (-3)',
    effect: {str: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  {
    id: 'str-3',
    pointCost: -7,
    flavor: "I'm just ... extremely weak.",
    description: 'Strength 3 (-4)',
    effect: {str: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'str-score'
  },
  // Dexterity ability score
  {
    id: 'dex-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda agile.",
    description: 'Dexterity 20 (+5)',
    effect: {dex: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-18',
    pointCost: 13,
    flavor: "I trained hard to be this agile.",
    description: 'Dexterity 18 (+4)',
    effect: {dex: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-16',
    pointCost: 9,
    flavor: "I'm naturally very agile.",
    description: 'Dexterity 16 (+3)',
    effect: {dex: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-14',
    pointCost: 4,
    flavor: "I'm pretty agile actually.",
    description: 'Dexterity 14 (+2)',
    effect: {dex: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-12',
    pointCost: 2,
    flavor: "I'm naturally a little agile.",
    description: 'Dexterity 12 (+1)',
    effect: {dex: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-8',
    pointCost: -2,
    flavor: "I'm naturally a little clumsy.",
    description: 'Dexterity 8 (-1)',
    effect: {dex: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-6',
    pointCost: -4,
    flavor: "I'm honestly pretty clumsy.",
    description: 'Dexterity 6 (-2)',
    effect: {dex: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-4',
    pointCost: -6,
    flavor: "I'm very clumsy.",
    description: 'Dexterity 4 (-3)',
    effect: {dex: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  {
    id: 'dex-3',
    pointCost: -7,
    flavor: "I'm just ... extremely clumsy.",
    description: 'Dexterity 3 (-4)',
    effect: {dex: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'dex-score'
  },
  // Constitution ability score
  {
    id: 'con-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda hardy.",
    description: 'Constitution 20 (+5)',
    effect: {con: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-18',
    pointCost: 13,
    flavor: "I trained hard to be this hardy.",
    description: 'Constitution 18 (+4)',
    effect: {con: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-16',
    pointCost: 9,
    flavor: "I'm naturally very hardy.",
    description: 'Constitution 16 (+3)',
    effect: {con: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-14',
    pointCost: 4,
    flavor: "I'm pretty hardy actually.",
    description: 'Constitution 14 (+2)',
    effect: {con: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-12',
    pointCost: 2,
    flavor: "I'm naturally a little hardy.",
    description: 'Constitution 12 (+1)',
    effect: {con: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-8',
    pointCost: -2,
    flavor: "I'm naturally a little sickly.",
    description: 'Constitution 8 (-1)',
    effect: {con: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-6',
    pointCost: -4,
    flavor: "I'm honestly pretty sickly.",
    description: 'Constitution 6 (-2)',
    effect: {con: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-4',
    pointCost: -6,
    flavor: "I'm very sickly.",
    description: 'Constitution 4 (-3)',
    effect: {con: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  {
    id: 'con-3',
    pointCost: -7,
    flavor: "I'm just ... extremely sickly.",
    description: 'Constitution 3 (-4)',
    effect: {con: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'con-score'
  },
  // Intelligence ability score
  {
    id: 'int-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda smart.",
    description: 'Intelligence 20 (+5)',
    effect: {int: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-18',
    pointCost: 13,
    flavor: "I trained hard to be this smart.",
    description: 'Intelligence 18 (+4)',
    effect: {int: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-16',
    pointCost: 9,
    flavor: "I'm naturally very smart.",
    description: 'Intelligence 16 (+3)',
    effect: {int: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-14',
    pointCost: 4,
    flavor: "I'm pretty smart actually.",
    description: 'Intelligence 14 (+2)',
    effect: {int: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-12',
    pointCost: 2,
    flavor: "I'm naturally a little smart.",
    description: 'Intelligence 12 (+1)',
    effect: {int: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-8',
    pointCost: -2,
    flavor: "I'm naturally a little dumb.",
    description: 'Intelligence 8 (-1)',
    effect: {int: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-6',
    pointCost: -4,
    flavor: "I'm honestly pretty dumb.",
    description: 'Intelligence 6 (-2)',
    effect: {int: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-4',
    pointCost: -6,
    flavor: "I'm very dumb.",
    description: 'Intelligence 4 (-3)',
    effect: {int: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  {
    id: 'int-3',
    pointCost: -7,
    flavor: "I'm just ... extremely dumb.",
    description: 'Intelligence 3 (-4)',
    effect: {int: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'int-score'
  },
  // Wisdom ability score
  {
    id: 'wis-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda wise.",
    description: 'Wisdom 20 (+5)',
    effect: {wis: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-18',
    pointCost: 13,
    flavor: "I trained hard to be this wise.",
    description: 'Wisdom 18 (+4)',
    effect: {wis: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-16',
    pointCost: 9,
    flavor: "I'm naturally very wise.",
    description: 'Wisdom 16 (+3)',
    effect: {wis: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-14',
    pointCost: 4,
    flavor: "I'm pretty wise actually.",
    description: 'Wisdom 14 (+2)',
    effect: {wis: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-12',
    pointCost: 2,
    flavor: "I'm naturally a little wise.",
    description: 'Wisdom 12 (+1)',
    effect: {wis: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-8',
    pointCost: -2,
    flavor: "I'm naturally a little oblivious.",
    description: 'Wisdom 8 (-1)',
    effect: {wis: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-6',
    pointCost: -4,
    flavor: "I'm honestly pretty oblivious.",
    description: 'Wisdom 6 (-2)',
    effect: {wis: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-4',
    pointCost: -6,
    flavor: "I'm very oblivious.",
    description: 'Wisdom 4 (-3)',
    effect: {wis: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  {
    id: 'wis-3',
    pointCost: -7,
    flavor: "I'm just ... extremely oblivious.",
    description: 'Wisdom 3 (-4)',
    effect: {wis: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'wis-score'
  },
  // Charisma ability score
  {
    id: 'cha-20',
    pointCost: 17,
    flavor: "No big deal, but I'm kinda charming.",
    description: 'Charisma 20 (+5)',
    effect: {cha: 20},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-18',
    pointCost: 13,
    flavor: "I trained hard to be this charming.",
    description: 'Charisma 18 (+4)',
    effect: {cha: 18},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-16',
    pointCost: 9,
    flavor: "I'm naturally very charming.",
    description: 'Charisma 16 (+3)',
    effect: {cha: 16},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-14',
    pointCost: 4,
    flavor: "I'm pretty charming actually.",
    description: 'Charisma 14 (+2)',
    effect: {cha: 14},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-12',
    pointCost: 2,
    flavor: "I'm naturally a little charming.",
    description: 'Charisma 12 (+1)',
    effect: {cha: 12},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-8',
    pointCost: -2,
    flavor: "I'm naturally a little dull.",
    description: 'Charisma 8 (-1)',
    effect: {cha: 8},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-6',
    pointCost: -4,
    flavor: "I'm honestly pretty dull.",
    description: 'Charisma 6 (-2)',
    effect: {cha: 6},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-4',
    pointCost: -6,
    flavor: "I'm very dull.",
    description: 'Charisma 4 (-3)',
    effect: {cha: 4},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  {
    id: 'cha-3',
    pointCost: -7,
    flavor: "I'm just ... extremely dull.",
    description: 'Charisma 3 (-4)',
    effect: {cha: 3},
    copiesAvailable: 1,
    category: 'ability-score',
    slot: 'cha-score'
  },
  // Saving throws
  {
    id: 'str-save',
    pointCost: 1,
    flavor: "Sturdy.",
    description: `Strength save proficiency (${prof})`,
    effect: { strSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'str-save'
  },
  {
    id: 'dex-save',
    pointCost: 2,
    flavor: "Dodged.",
    description: `Dexterity save proficiency (${prof})`,
    effect: { dexSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'dex-save'
  },
  {
    id: 'con-save',
    pointCost: 2,
    flavor: "I've got this.",
    description: `Constitution save proficiency (${prof})`,
    effect: { conSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'con-save'
  },
  {
    id: 'int-save',
    pointCost: 1,
    flavor: "Get out of my head.",
    description: `Intelligence save proficiency (${prof})`,
    effect: { intSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'int-save'
  },
  {
    id: 'wis-save',
    pointCost: 2,
    flavor: "I saw that coming.",
    description: `Wisdom save proficiency (${prof})`,
    effect: { wisSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'wis-save'
  },
  {
    id: 'cha-save',
    pointCost: 1,
    flavor: "Can't charm me.",
    description: `Charisma save proficiency (${prof})`,
    effect: { chaSave: proficiencyBonus },
    copiesAvailable: 1,
    category: 'saving-throw',
    slot: 'cha-save'
  },
  // Skills
  {
    id: 'acrobatics-prof',
    pointCost: 1,
    flavor: "I did a summer at the circus.",
    description: `Acrobatics proficiency (${prof})`,
    effect: { acrobatics: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'acrobatics-bonus'
  },
  {
    id: 'animal-handling-prof',
    pointCost: 1,
    flavor: "I'm good with animals.",
    description: `Animal handling proficiency (${prof})`,
    effect: { animalHandling: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'animal-handling-bonus'
  },
  {
    id: 'arcana-prof',
    pointCost: 1,
    flavor: "I'm learned in the magical arts.",
    description: `Arcana proficiency (${prof})`,
    effect: { arcana: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'arcana-bonus'
  },
  {
    id: 'athletics-prof',
    pointCost: 1,
    flavor: "I'm into fitness.",
    description: `Athletics proficiency (${prof})`,
    effect: { athletics: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'athletics-bonus'
  },
  {
    id: 'deception-prof',
    pointCost: 1,
    flavor: "I would never lie to you.",
    description: `Deception proficiency (${prof})`,
    effect: { deception: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'deception-bonus'
  },
  {
    id: 'history-prof',
    pointCost: 1,
    flavor: "I love a dusty book.",
    description: `History proficiency (${prof})`,
    effect: { history: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'history-bonus'
  },
  {
    id: 'insight-prof',
    pointCost: 1,
    flavor: "I'm good at reading people.",
    description: `Insight proficiency (${prof})`,
    effect: { insight: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'insight-bonus'
  },
  {
    id: 'intimidation-prof',
    pointCost: 1,
    flavor: "People listen to me.",
    description: `Intimidation proficiency (${prof})`,
    effect: { intimidation: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'intimidation-bonus'
  },
  {
    id: 'investigation-prof',
    pointCost: 1,
    flavor: "I'm detail oriented.",
    description: `Investigation proficiency (${prof})`,
    effect: { investigation: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'investigation-bonus'
  },
  {
    id: 'medicine-prof',
    pointCost: 1,
    flavor: "Patch 'em up.",
    description: `Medicine proficiency (${prof})`,
    effect: { medicine: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'medicine-bonus'
  },
  {
    id: 'nature-prof',
    pointCost: 1,
    flavor: "I know my plants and animals.",
    description: `Nature proficiency (${prof})`,
    effect: { nature: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'nature-bonus'
  },
  {
    id: 'perception-prof',
    pointCost: 1,
    flavor: "I have a keen eye.",
    description: `Perception proficiency (${prof})`,
    effect: { perception: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'perception-bonus'
  },
  {
    id: 'performance-prof',
    pointCost: 1,
    flavor: "It's all in the delivery.",
    description: `Performance proficiency (${prof})`,
    effect: { performance: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'performance-bonus'
  },
  {
    id: 'persuasion-prof',
    pointCost: 1,
    flavor: "I can usually talk people around.",
    description: `Persuasion proficiency (${prof})`,
    effect: { persuasion: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'persuasion-bonus'
  },
  {
    id: 'religion-prof',
    pointCost: 1,
    flavor: "I know my devils from my demons.",
    description: `Religion proficiency (${prof})`,
    effect: { religion: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'religion-bonus'
  },
  {
    id: 'sleight-of-hand-prof',
    pointCost: 1,
    flavor: "Look! What's that behind you!",
    description: `Sleight of hand proficiency (${prof})`,
    effect: { sleightOfHand: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'sleight-of-hand-bonus'
  },
  {
    id: 'stealth-prof',
    pointCost: 1,
    flavor: "I'm whisper quiet.",
    description: `Stealth proficiency (${prof})`,
    effect: { stealth: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'stealth-bonus'
  },
  {
    id: 'survival-prof',
    pointCost: 1,
    flavor: "I know this one's safe to eat.",
    description: `Survival proficiency (${prof})`,
    effect: { survival: proficiencyBonus },
    copiesAvailable: 1,
    category: 'skill',
    slot: 'survival-bonus'
  },
  // Expertise
  {
    id: 'acrobatics-expert',
    pointCost: 3,
    flavor: "I invented the frontflip.",
    description: `Acrobatics expertise (${expertise})`,
    effect: { acrobatics: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'acrobatics-bonus'
  },
  {
    id: 'animal-handling-expert',
    pointCost: 3,
    flavor: "Animals just love me.",
    description: `Animal handling expertise (${expertise})`,
    effect: { animalHandling: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'animal-handling-bonus'
  },
  {
    id: 'arcana-expert',
    pointCost: 3,
    flavor: "I'm a master of the arcane.",
    description: `Arcana expertise (${expertise})`,
    effect: { arcana: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'arcana-bonus'
  },
  {
    id: 'athletics-expert',
    pointCost: 3,
    flavor: "I did a 10k before breakfast.",
    description: `Athletics expertise (${expertise})`,
    effect: { athletics: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'athletics-bonus'
  },
  {
    id: 'deception-expert',
    pointCost: 3,
    flavor: "I'm lying right now.",
    description: `Deception expertise (${expertise})`,
    effect: { deception: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'deception-bonus'
  },
  {
    id: 'history-expert',
    pointCost: 3,
    flavor: "I've read all the books.",
    description: `History expertise (${expertise})`,
    effect: { history: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'history-bonus'
  },
  {
    id: 'insight-expert',
    pointCost: 3,
    flavor: "But how does that make you feel?",
    description: `Insight expertise (${expertise})`,
    effect: { insight: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'insight-bonus'
  },
  {
    id: 'intimidation-expert',
    pointCost: 3,
    flavor: "I dare you.",
    description: `Intimidation expertise (${expertise})`,
    effect: { intimidation: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'intimidation-bonus'
  },
  {
    id: 'investigation-expert',
    pointCost: 3,
    flavor: "Elementary, my dear.",
    description: `Investigation expertise (${expertise})`,
    effect: { investigation: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'investigation-bonus'
  },
  {
    id: 'medicine-expert',
    pointCost: 3,
    flavor: "It's hardly rocket science.",
    description: `Medicine expertise (${expertise})`,
    effect: { medicine: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'medicine-bonus'
  },
  {
    id: 'nature-expert',
    pointCost: 3,
    flavor: "Nature is one with me.",
    description: `Nature expertise (${expertise})`,
    effect: { nature: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'nature-bonus'
  },
  {
    id: 'perception-expert',
    pointCost: 3,
    flavor: "I spy with my beady eye.",
    description: `Perception expertise (${expertise})`,
    effect: { perception: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'perception-bonus'
  },
  {
    id: 'performance-expert',
    pointCost: 3,
    flavor: "But you have heard of me.",
    description: `Performance expertise (${expertise})`,
    effect: { performance: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'performance-bonus'
  },
  {
    id: 'persuasion-expert',
    pointCost: 3,
    flavor: "Don't you agree?",
    description: `Persuasion expertise (${expertise})`,
    effect: { persuasion: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'persuasion-bonus'
  },
  {
    id: 'religion-expert',
    pointCost: 3,
    flavor: "I know the god personally.",
    description: `Religion expertise (${expertise})`,
    effect: { religion: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'religion-bonus'
  },
  {
    id: 'sleight-of-hand-expert',
    pointCost: 3,
    flavor: "None of this stuff's mine.",
    description: `Sleight of hand expertise (${expertise})`,
    effect: { sleightOfHand: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'sleight-of-hand-bonus'
  },
  {
    id: 'stealth-expert',
    pointCost: 3,
    flavor: "I'm basically invisible.",
    description: `Stealth expertise (${expertise})`,
    effect: { stealth: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'stealth-bonus'
  },
  {
    id: 'survival-expert',
    pointCost: 3,
    flavor: "I know which way north is.",
    description: `Survival expertise (${expertise})`,
    effect: { survival: expertiseBonus },
    copiesAvailable: 1,
    category: 'expertise',
    slot: 'survival-bonus'
  },
]
