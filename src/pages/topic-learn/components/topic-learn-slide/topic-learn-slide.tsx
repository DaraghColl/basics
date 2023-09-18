import { FC, useState } from 'react';
import { TopicData } from '../../../../types/types';
import { toast } from 'react-toastify';

interface TopicLearnSlideProps {
  topicData: TopicData;
  answer?: string;
  frontCardLarge?: boolean;
  backCardLarge?: boolean;
  setInputValue: (value: string) => void;
}
const TopicLearnSlide: FC<TopicLearnSlideProps> = (props) => {
  const { topicData, answer, frontCardLarge, backCardLarge, setInputValue } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    if (!isFlipped && answer) {
      if (answer.toLowerCase() === topicData.back.toLowerCase()) {
        toast.success('correct answer');
      } else {
        toast.error('incorrect answer');
      }
    }

    setIsFlipped(!isFlipped);
    setInputValue('');
  };

  return (
    <div className="w-full min-w-full snap-center snap-always" key={topicData.front} onClick={flipCard}>
      <div className="h-full cursor-pointer rounded-md bg-secondary p-8 dark:bg-secondary-dark">
        <div
          className={`preserve-3d relative flex h-full items-center justify-center transition-transform duration-[0.8s] ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          <div className="backface-visibility absolute">
            <h2 className={`mb-4 text-2xl ${frontCardLarge ? 'text-7xl' : ''}`}>{topicData.front}</h2>
          </div>
          <div className="backface-visibility rotate-y-180 absolute">
            <h2 className={`mb-4  text-2xl ${backCardLarge ? 'text-7xl' : ''}`}>{topicData.back}</h2>
            {topicData.pronuciation ? (
              <h3 className="text-slate-500 dark:text-slate-400">Pronuciation: {topicData.pronuciation}</h3>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopicLearnSlide };
