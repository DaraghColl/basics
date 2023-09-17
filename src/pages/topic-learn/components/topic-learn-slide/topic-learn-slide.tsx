import { FC, useState } from 'react';
import './topic-learn-slide.css';
import { TopicData } from '../../../../types/types';
import { toast } from 'react-toastify';

interface TopicLearnSlideProps {
  topicData: TopicData;
  answer?: string;
  frontCardLarge?: boolean;
  backCardLarge?: boolean;
}
const TopicLearnSlide: FC<TopicLearnSlideProps> = (props) => {
  const { topicData, answer, frontCardLarge, backCardLarge } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    if (!isFlipped) {
      if (answer === topicData.back) {
        console.log('correct answer');
        toast.success('correct answer');
      } else {
        toast.error('incorrect answer');
        console.log('incorrect answer');
      }
    }

    setIsFlipped(!isFlipped);
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
