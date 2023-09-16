import { TopicData } from '../../types/types';

const timesTablesToTenMathData: TopicData[] = calculateTables();

function calculateTables() {
  const list: TopicData[] = [];
  [...Array(10)].forEach((_, currentNumber) => {
    return [...Array(10)].map((_, i) => {
      list.push({
        front: `${currentNumber + 1} x ${i + 1}`,
        back: `${(currentNumber + 1) * (i + 1)}`,
      });
    });
  });

  return list;
}

export { timesTablesToTenMathData };
