import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { CategoryFilter } from '../types';

interface CategoryChipsProps {
  categories: CategoryFilter[];
  selected: CategoryFilter;
  onSelect: (category: CategoryFilter) => void;
}

export function CategoryChips({ categories, selected, onSelect }: CategoryChipsProps) {
  const { colors } = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.row}
    >
      {categories.map((category) => {
        const isActive = category === selected;
        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            style={({ pressed }) => [
              styles.chip,
              isActive
                ? {
                    backgroundColor: pressed ? colors.primaryPressed : colors.primary,
                    borderColor: colors.primary,
                  }
                : { backgroundColor: colors.surface, borderColor: colors.border },
              pressed && !isActive && styles.chipPressed,
            ]}
          >
            <Text style={[styles.chipText, { color: isActive ? colors.onPrimary : colors.text }]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 0,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  chipPressed: {
    opacity: 0.7,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
