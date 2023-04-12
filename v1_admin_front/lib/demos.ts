type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
  }[];
};

export const demos: Item[] = [
  {
    name: '어드민',
    items: [
      {
        name: '유저',
        slug: 'user',
        description: '유저관련 어드민 페이지',
      },
    ],
  }
];
