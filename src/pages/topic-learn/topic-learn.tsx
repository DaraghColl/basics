import './topic-learn.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { topicList } from '../../content/topics';
import { TopicLearnSlide } from './components/topic-learn-slide/topic-learn-slide';
import { ChangeEvent, useState } from 'react';
import { TopicData } from '../../types/types';
import { SliderActions } from './components/slider-actions/slider-actions';

const TopicLearn = () => {
  const { id } = useParams();
  const selectedTopic = topicList.find((topic) => topic.id === Number(id));
  const [shuffleOn, setShuffleOn] = useState(false);

  if (selectedTopic) {
    const { data, title, canAnswer, backCardLarge, frontCardLarge } = selectedTopic;
    const [topic, setTopic] = useState<TopicData[]>(data);

    const shuffleSlides = () => {
      const shuffledData = [...topic].sort(() => Math.random() - 0.5);

      if (!shuffleOn) {
        setTopic(shuffledData);
        setShuffleOn(!shuffleOn);
        toast.info('shuffle slides on');
        return;
      }

      setTopic(data);
      setShuffleOn(!shuffleOn);
      toast.info('shuffle slides off');

      return;
    };

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <div className="topic-learn">
        <h2 className="topic-learn-title">{title}</h2>
        <div className="slider" key={`slides_shuffle_${shuffleOn}`}>
          {topic.map((topicData) => {
            return (
              <TopicLearnSlide
                topicData={topicData}
                frontCardLarge={frontCardLarge}
                backCardLarge={backCardLarge}
                answer={inputValue}
                key={topicData.front}
                setInputValue={setInputValue}
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
