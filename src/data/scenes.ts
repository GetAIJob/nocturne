export interface Scene {
  id: string
  number: string
  title: string
  setting: string
  excerpt: string
  duration: string
  palette: string
  hue: string  // CSS color for the scene's accent tint
}

export const scenes: Scene[] = [
  {
    id: 'breakwater',
    number: '01',
    title: 'Breakwater',
    setting: 'A fishing town. Pre-dawn. Forty seconds of held breath.',
    excerpt: 'A boat does not move. The water does not move. The only motion is the slow change of colour above the line of the horizon.',
    duration: '00:42',
    palette: 'Ink, ash, cold blue',
    hue: '#7BAFD4',
  },
  {
    id: 'corridor',
    number: '02',
    title: 'A long corridor',
    setting: 'A hotel of indeterminate decade. Late evening. A single bulb at each end.',
    excerpt: 'The carpet absorbs the sound. The walls absorb the sound. The room key, when it is turned, is the loudest thing that has happened in an hour.',
    duration: '01:18',
    palette: 'Mahogany, ember, smoke',
    hue: '#E89F71',
  },
  {
    id: 'glass',
    number: '03',
    title: 'Glass against glass',
    setting: 'A bar. A reflection that disagrees with what is in front of it.',
    excerpt: 'Two figures who may or may not be the same person. A glass that is full. A glass that has just been emptied. The bartender does not look up.',
    duration: '02:04',
    palette: 'Violet, gold, midnight',
    hue: '#9D8DF1',
  },
  {
    id: 'station',
    number: '04',
    title: 'Station with no name',
    setting: 'A platform. The departures board has been blank for twenty minutes.',
    excerpt: 'No-one is leaving. No-one has the energy to be impatient. The light from the vending machine is the only thing that has any opinion on the situation.',
    duration: '00:55',
    palette: 'Mercury, neon green, dust',
    hue: '#A8E6CF',
  },
  {
    id: 'thaw',
    number: '05',
    title: 'Thaw',
    setting: 'A garden in the second week of February. Shot through a window.',
    excerpt: 'The first morning the cold has slightly retreated. The grass has not yet noticed. The sound of birds, returning, is technically too quiet to hear.',
    duration: '01:32',
    palette: 'Bone, pale rose, breath',
    hue: '#F5C5C5',
  },
]
