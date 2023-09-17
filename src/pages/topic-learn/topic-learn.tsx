import './topic-learn.css';
import { useParams } from 'react-router-dom';
import { topicList } from '../../content/topics';
import { TopicLearnSlide } from './topic-learn-slide';
import { ChangeEvent, useState } from 'react';
import { TopicData } from '../../types/types';
import { SliderActions } from './components/slider-actions';

const TopicLearn = () => {
  const { id } = useParams();
  const selectedTopic = topicList.find((topic) => topic.id === Number(id));
  const [shuffleOn, setShuffleOn] = useState(false);

  if (selectedTopic) {
    const { data, canAnswer, backCardLarge, frontCardLarge } = selectedTopic;
    const [topic, setTopic] = useState<TopicData[]>(data);

    const shuffleSlides = () => {
      const shuffledData = [...topic].sort(() => Math.random() - 0.5);

      if (!shuffleOn) {
        setTopic(shuffledData);
        setShuffleOn(!shuffleOn);
        return;
      }

      setTopic(data);
      setShuffleOn(!shuffleOn);
      return;
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <div className="topic-learn">
        <div className="slider" key={`slides_shuffle_${shuffleOn}`}>
          {topic.map((topicData) => {
            return (
              <TopicLearnSlide
                topicData={topicData}
                frontCardLarge={frontCardLarge}
                backCardLarge={backCardLarge}
                answer={inputValue}
                key={topicData.front}
              />
            );
          })}
        </div>
        <SliderActions
          shuffleSlides={shuffleSlides}
          shuffleOn={shuffleOn}
          canAnswer={canAnswer}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
    );
  }
};

export { TopicLearn };
