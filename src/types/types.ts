interface Topic {
  id: number;
  title: string;
  description: string;
  icon?: string;
  data: TopicData[];
}

interface TopicData {
  front: string;
  back: string;
  pronuciation?: string;
}

export type { Topic, TopicData };
