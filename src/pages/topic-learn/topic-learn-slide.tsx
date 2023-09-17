import { FC, useState } from 'react';
import './topic-learn.css';
import { TopicData } from '../../types/types';

interface TopicLearnSlideProps {
  topicData: TopicData;
  frontCardLarge?: boolean;
  backCardLarge?: boolean;
}
const TopicLearnSlide: FC<TopicLearnSlideProps> = (props) => {
  const { topicData, frontCardLarge, backCardLarge } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="slide" key={topicData.front} onClick={() => setIsFlipped(!isFlipped)}>
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
