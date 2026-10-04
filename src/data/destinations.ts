import { CategoryFilter, DestinationItem } from '../types';

export const CATEGORIES: CategoryFilter[] = ['Усі', 'Гори', 'Озера', 'Замки', 'Природа', 'Печери'];
// «Печери» навмисно не має записів — для демонстрації ListEmptyComponent.

export const DESTINATIONS: DestinationItem[] = [
  {
    id: '1',
    title: 'Озеро Синевир',
    category: 'Озера',
    location: 'Закарпаття',
    rating: '4.9 ★',
    description: 'Найбільше гірське озеро Карпат з кришталево чистою водою.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Говерла',
    category: 'Гори',
    location: 'Івано-Франківщина',
    rating: '5.0 ★',
    description:
      'Найвища вершина України, що відкриває неймовірні панорами на Чорногірський хребет.',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Кам’янець-Подільська фортеця',
    category: 'Замки',
    location: 'Хмельницька обл.',
    rating: '4.8 ★',
    description:
      'Середньовічна фортеця над річкою Смотрич, пам’ятка фортифікаційного мистецтва.',
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Олешківські піски',
    category: 'Природа',
    location: 'Херсонщина',
    rating: '4.7 ★',
    description:
      'Один із найбільших піщаних масивів у Європі з унікальним пустельним ландшафтом.',
    imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Піп Іван Чорногірський',
    category: 'Гори',
    location: 'Верховинський р-н',
    rating: '4.9 ★',
    description:
      'Вершина з руїнами обсерваторії «Білий слон», звідки видно половину Карпат у ясну погоду.',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Озеро Світязь',
    category: 'Озера',
    location: 'Волинь',
    rating: '4.8 ★',
    description:
      'Найглибше природне озеро України з піщаними пляжами та сосновим лісом навколо.',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    isFeatured: true,
  },
  {
    id: '7',
    title: 'Олеський замок',
    category: 'Замки',
    location: 'Львівщина',
    rating: '4.6 ★',
    description:
      'Замок XIV століття на пагорбі серед парку, місце народження короля Яна III Собеського.',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800',
    isFeatured: false,
  },
  {
    id: '8',
    title: 'Софіївський парк',
    category: 'Природа',
    location: 'Умань, Черкащина',
    rating: '4.9 ★',
    description:
      'Дендрологічний парк кінця XVIII століття зі скелями, гротами, водоспадами та ставками.',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    isFeatured: false,
  },
];
