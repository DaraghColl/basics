import { alphabetData } from './language/alphabet';
import { irishData } from './language/irish';
import { timesTablesToTenMathData } from './math/math';
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
  },
  {
    id: 2,
    title: 'Irish',
    description: 'Learn the basics of the irish language with common phrases and sayings 🇮🇪',
    icon: 'language',
    data: irishData,
  },
  {
    id: 3,
    title: 'Alphabet',
    description: 'Learn the aplhabet with word association and images 🍎',
    icon: 'language',
    data: alphabetData,
  },
];

export { topicList };
