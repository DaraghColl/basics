import { Link, useParams } from 'react-router-dom';
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
      <div className="relative flex h-3/4 w-full flex-col gap-4">
        <Link to="/topic-list">
          <svg
            className="absolute top-4 h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
        </Link>

        <h2 className="text-center text-2xl font-bold tracking-wide">{title}</h2>
        <div
          className="scrollbar no-scrollbar flex h-full w-full snap-x snap-mandatory gap-8 overflow-scroll scroll-smooth"
          key={`slides_shuffle_${shuffleOn}`}
        >
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
