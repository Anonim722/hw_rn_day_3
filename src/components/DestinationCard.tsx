import { memo } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';
import { DestinationItem } from '../types';

export interface DestinationCardProps {
  item: DestinationItem;
  onPress?: (item: DestinationItem) => void;
}

function DestinationCardComponent({ item, onPress }: DestinationCardProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      accessibilityRole="button"
      accessibilityLabel={item.title}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border },
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        {item.isFeatured && (
          <View style={styles.badgeOverlay} pointerEvents="none">
            <View style={[styles.badge, { backgroundColor: colors.badge }]}>
              <Text style={[styles.badgeText, { color: colors.onPrimary }]}>TOP</Text>
            </View>
          </View>
        )}
      </View>

      <Text style={[styles.category, { color: colors.primary }]}>{item.category}</Text>
      <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
      <Text
        style={[styles.description, { color: colors.textSecondary }]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {item.description}
      </Text>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      <View style={styles.meta}>
        <Text style={[styles.location, { color: colors.textSecondary }]} numberOfLines={1}>
          📍 {item.location}
        </Text>
        <Text style={[styles.rating, { color: colors.text }]}>{item.rating}</Text>
      </View>
    </Pressable>
  );
}

export const DestinationCard = memo(DestinationCardComponent);

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 12,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },
  badgeOverlay: {
    // В RN 0.86 absoluteFillObject видалено — його пряма заміна absoluteFill (тепер звичайний об’єкт).
    ...StyleSheet.absoluteFill,
    alignItems: 'flex-end',
    padding: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  category: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    marginVertical: 12,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  location: {
    flex: 1,
    fontSize: 13,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
  },
});
