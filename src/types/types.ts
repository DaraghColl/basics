interface Topic {
  id: number;
  title: string;
  description: string;
  icon?: string;
  data: TopicData[];
  canAnswer?: boolean;
  frontCardLarge?: boolean;
  backCardLarge?: boolean;
}

interface TopicData {
  front: string;
  back: string;
  pronuciation?: string;
}

export type { Topic, TopicData };
