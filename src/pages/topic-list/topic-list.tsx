import { FC } from 'react';
import { topicList } from '../../content/topics';
import { TopicItem } from './topic-item';

const TopicList: FC = () => {
  return (
    <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-2">
      {topicList.map((topic) => {
        return <TopicItem topic={topic} key={topic.id} />;
      })}
    </div>
  );
};

export { TopicList };
