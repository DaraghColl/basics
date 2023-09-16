import { FC } from 'react';
import { Topic } from '../../types/types';
import { iconsMap } from './icons-map';

interface TopicProps {
  topic: Topic;
}

const TopicItem: FC<TopicProps> = (props) => {
  const { topic } = props;
  return (
    <>
      <div className="topic-item" id="topic_${topic.id}" data-topic-id="${topic.id}">
        {topic.icon && <div className="topic-icon">{iconsMap[topic.icon]}</div>}
        <div className="topic-info">
          <h2 className="topic-title">{topic.title}</h2>
          <h3 className="topic-description">{topic.description}</h3>
        </div>
      </div>
    </>
  );
};

export { TopicItem };
