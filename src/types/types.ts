interface Topic {
  id: number;
  title: string;
  description: string;
  icon?: string;
  data: TopicData[];
  frontCardLarge?: boolean;
  backCardLarge?: boolean;
}

interface TopicData {
  front: string;
  back: string;
  pronuciation?: string;
}

export type { Topic, TopicData };
