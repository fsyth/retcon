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
}

export type Category = 'ability-score'

export type Slot = 'str-score' | 'dex-score' | 'con-score' | 'int-score' | 'wis-score' | 'cha-score'

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
]
