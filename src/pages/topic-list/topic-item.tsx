import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Topic } from '../../types/types';
import { iconsMap } from './icons-map';

interface TopicProps {
  topic: Topic;
}

const TopicItem: FC<TopicProps> = (props) => {
  const { topic } = props;

  const navigate = useNavigate();

  const navigateToTopic = () => {
    navigate(`/topic-learn/${topic.id}`);
  };

  return (
    <div
      className="relative flex min-h-[10rem] cursor-pointer flex-col justify-center rounded-md bg-secondary p-8 transition duration-300 ease-in-out hover:scale-105 dark:bg-secondary-dark"
      id="topic_${topic.id}"
      data-topic-id="${topic.id}"
      onClick={() => navigateToTopic()}
    >
      {topic.icon && (
        <div className="l-2 absolute left-1 top-2 flex items-center rounded-md bg-primary p-4 dark:bg-primary-dark">
          {iconsMap[topic.icon]}
        </div>
      )}
      <div className="topic-info m-auto flex max-w-[80%] flex-col items-center gap-4 pt-8 text-center">
        <h2 className="text-xl font-bold tracking-wide md:text-2xl">{topic.title}</h2>
        <h3 className="text-sm font-normal tracking-wide text-slate-500 dark:text-slate-400">{topic.description}</h3>
      </div>
    </div>
  );
};

export { TopicItem };
