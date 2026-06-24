import { CATEGORIES } from '@aihub/shared';
import { CategoryList } from '@/components/CategoryList';

export default function CategoriesPage() {
  return <CategoryList categories={CATEGORIES} />;
}