import { useCallback, useMemo, useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CategoryChips } from '../components/CategoryChips';
import { DestinationCard } from '../components/DestinationCard';
import { EmptyState } from '../components/EmptyState';
import { CATEGORIES, DESTINATIONS } from '../data/destinations';
import { useTheme } from '../theme/ThemeProvider';
import { CategoryFilter, DestinationItem } from '../types';

function pluralizePlaces(count: number): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'місце';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'місця';
  return 'місць';
}

function Separator() {
  return <View style={styles.separator} />;
}

const keyExtractor = (item: DestinationItem) => item.id;

export default function CatalogScreen() {
  const { colors, theme, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Усі');
  const [refreshing, setRefreshing] = useState(false);

  const filteredData = useMemo(() => {
    if (selectedCategory === 'Усі') return DESTINATIONS;
    return DESTINATIONS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 900);
  }, []);

  const handleResetFilter = useCallback(() => setSelectedCategory('Усі'), []);

  const handleCardPress = useCallback((item: DestinationItem) => {
    console.log('Обрано:', item.title);
  }, []);

  const renderItem = useCallback<ListRenderItem<DestinationItem>>(
    ({ item }) => <DestinationCard item={item} onPress={handleCardPress} />,
    [handleCardPress],
  );

  const isEmpty = filteredData.length === 0;

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[styles.screen, { backgroundColor: colors.background }]}
    >
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />

      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Каталог місць</Text>
        <Pressable
          onPress={toggleTheme}
          accessibilityRole="button"
          accessibilityLabel="Перемкнути тему"
          style={({ pressed }) => [
            styles.themeToggle,
            { backgroundColor: colors.surface, borderColor: colors.border },
            pressed && styles.themeTogglePressed,
          ]}
        >
          <Text style={[styles.themeToggleText, { color: colors.text }]}>
            {theme === 'dark' ? '🌙 Темна' : '☀️ Світла'}
          </Text>
        </Pressable>
      </View>

      <CategoryChips
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FlatList
        style={styles.list}
        data={filteredData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={
          isEmpty ? null : (
            <Text style={[styles.summary, { color: colors.textSecondary }]}>
              Знайдено: {filteredData.length} {pluralizePlaces(filteredData.length)}
            </Text>
          )
        }
        ListEmptyComponent={<EmptyState onReset={handleResetFilter} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor={colors.primary}
            colors={[colors.primary]}
            progressBackgroundColor={colors.surface}
          />
        }
        initialNumToRender={4}
        windowSize={7}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  themeToggle: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  themeTogglePressed: {
    opacity: 0.7,
  },
  themeToggleText: {
    fontSize: 14,
    fontWeight: '500',
  },
  list: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  summary: {
    fontSize: 14,
    marginBottom: 12,
  },
  separator: {
    height: 16,
  },
});
