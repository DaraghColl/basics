import './topic-learn.css';
import { useParams } from 'react-router-dom';
import { topicList } from '../../content/topics';
import { TopicLearnSlide } from './topic-learn-slide';
import { useState } from 'react';
import { TopicData } from '../../types/types';

const TopicLearn = () => {
  const { id } = useParams();
  const selectedTopic = topicList.find((topic) => topic.id === Number(id));
  const [shuffleOn, setShuffleOn] = useState(false);

  if (selectedTopic) {
    const { data, backCardLarge, frontCardLarge } = selectedTopic;
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

    return (
      <div className="topic-learn">
        <div className="slider" key={`slides_shuffle_${shuffleOn}`}>
          {topic.map((topicData) => {
            return (
              <TopicLearnSlide
                topicData={topicData}
                frontCardLarge={frontCardLarge}
                backCardLarge={backCardLarge}
                key={topicData.front}
              />
            );
          })}
        </div>
        <div className="slider-controls">
          <button
            className={`slider-controls-button ${shuffleOn ? 'slider-controls-selected' : ''}`}
            onClick={shuffleSlides}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
};

export { TopicLearn };
