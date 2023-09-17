import { alphabetData } from './language/alphabet';
import { irishData } from './language/irish';
import { timesTablesToTenMathData } from './math/math';
import { animalData } from './animals';
import { Topic } from '../types/types';

const topicList: Topic[] = [
  {
    id: 0,
    title: 'Alphabet',
    description: 'Learn the aplhabet with word association and images 🍎',
    icon: 'language',
    data: alphabetData,
  },
  {
    id: 1,
    title: 'Times Tables 1-10',
    description: 'Learn and test yourself with times tables up to 10',
    icon: 'math',
    data: timesTablesToTenMathData,
    canAnswer: true,
  },

  {
    id: 2,
    title: 'Animals',
    description: 'Learn all the animals names with pictures 🙂',
    icon: 'language',
    data: animalData,
    frontCardLarge: true,
  },
  {
    id: 3,
    title: 'Irish',
    description: 'Learn the basics of the irish language with common phrases and sayings 🇮🇪',
    icon: 'language',
    data: irishData,
  },
];

export { topicList };
