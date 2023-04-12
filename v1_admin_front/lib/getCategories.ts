export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Category = {
  name: string;
  slug: string;
  count: number;
};

export const getCategories = (): Category[] => [
  {
    name: '유저 조회 및 수정',
    slug: 'electronics',
    count: 11,
  },
  {
    name: '유저 등록',
    slug: 'clothing',
    count: 12,
  },
];

export async function fetchCategoryBySlug(slug: string | undefined) {
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}
