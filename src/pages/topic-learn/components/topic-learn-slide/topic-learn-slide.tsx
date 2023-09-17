import { FC, useState } from 'react';
import './topic-learn-slide.css';
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
    <div className="slide" key={topicData.front} onClick={flipCard}>
      <div className={`slide-card ${isFlipped ? 'slide-card-clicked' : ''}`}>
        <div className="slide-card-body">
          <div className="slide-card-front">
            <h2 className={frontCardLarge ? 'slide-card-front-large' : ''}>{topicData.front}</h2>
          </div>
          <div className="slide-card-back">
            <h2 className={backCardLarge ? 'slide-card-front-large' : ''}>{topicData.back}</h2>
            {topicData.pronuciation ? <h3>Pronuciation: {topicData.pronuciation}</h3> : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TopicLearnSlide };
