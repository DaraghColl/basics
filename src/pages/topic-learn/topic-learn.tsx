import './topic-learn.css';
import { useParams } from 'react-router-dom';
import { topicList } from '../../content/topics';
import { TopicLearnSlide } from './topic-learn-slide';

const TopicLearn = () => {
  const { id } = useParams();
  const topic = topicList.find((topic) => topic.id === Number(id));

  if (topic) {
    const { data } = topic;

    console.log(data);

    return (
      <div className="slider">
        {data.map((topicData) => {
          return <TopicLearnSlide topicData={topicData} key={topicData.front} />;
        })}
      </div>
    );
  }
};

export { TopicLearn };
