import { FC } from 'react';
import './topic-list.css';
import { topicList } from '../../content/topics';
import { TopicItem } from './topic-item';

const TopicList: FC = () => {
  return (
    <div className="topic-list">
      {topicList.map((topic) => {
        return <TopicItem topic={topic} key={topic.id} />;
      })}
    </div>
  );
};

export { TopicList };
