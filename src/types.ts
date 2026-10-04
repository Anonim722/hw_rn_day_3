export interface DestinationItem {
  id: string;
  title: string;
  category: Category;
  location: string;
  rating: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
}

export type Category = 'Гори' | 'Озера' | 'Замки' | 'Природа' | 'Печери';

export type CategoryFilter = 'Усі' | Category;
