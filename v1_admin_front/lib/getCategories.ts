export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Category = {
  name: string;
  slug: string;
  count: number;
  items: Omit<Category, 'items'>[];
};

export const getCategories = (): Category[] => [
  {
    name: '유저 조회 및 수정',
    slug: 'electronics',
    count: 11,
    items: [
      { name: '어드민', slug: 'phones', count: 4 },
      { name: '유저', slug: 'tablets', count: 5 },
    ],
  },
  {
    name: '유저 등록',
    slug: 'clothing',
    count: 12,
    items: [
      { name: 'Tops', slug: 'tops', count: 3 },
      { name: 'Shorts', slug: 'shorts', count: 4 },
      { name: 'Shoes', slug: 'shoes', count: 5 },
    ],
  },
];

export async function fetchCategoryBySlug(slug: string | undefined) {
  // Assuming it always return expected categories
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}

async function findSubCategory(
  category: Category | undefined,
  subCategorySlug: string | undefined,
) {
  return category?.items.find((category) => category.slug === subCategorySlug);
}

export async function fetchSubCategory(
  categorySlug: string | undefined,
  subCategorySlug: string | undefined,
) {
  const category = await fetchCategoryBySlug(categorySlug);
  return findSubCategory(category, subCategorySlug);
}
