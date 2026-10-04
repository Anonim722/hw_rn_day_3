import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../theme/ThemeProvider';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🧭</Text>
      <Text style={[styles.title, { color: colors.text }]}>Нічого не знайдено</Text>
      <Text style={[styles.hint, { color: colors.textSecondary }]}>
        У цій категорії поки немає місць. Спробуйте іншу категорію або скиньте фільтр.
      </Text>
      <Pressable
        onPress={onReset}
        accessibilityRole="button"
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? colors.primaryPressed : colors.primary },
        ]}
      >
        <Text style={[styles.buttonText, { color: colors.onPrimary }]}>Скинути фільтр</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  emoji: {
    fontSize: 48,
  },
  title: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
  },
  hint: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
