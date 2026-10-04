# React Native Day 3 — StyleSheet, темна тема та FlatList

Expo SDK 57 · React Native 0.86 · TypeScript (strict).

## Запуск

```bash
npm install
npx expo start        # Expo Go: відскануйте QR-код
npx expo start --web  # React Native Web preview
```

## Структура

```text
App.tsx                          SafeAreaProvider → ThemeProvider → CatalogScreen
src/
├── types.ts                     DestinationItem, Category, CategoryFilter
├── theme/
│   ├── tokens.ts                ColorTokens, lightColors, darkColors
│   └── ThemeProvider.tsx        ThemeContext, ThemeProvider, useTheme()
├── data/destinations.ts         DESTINATIONS (8 місць), CATEGORIES
├── components/
│   ├── DestinationCard.tsx      тематична картка (memo)
│   ├── CategoryChips.tsx        горизонтальні чіпи-фільтри
│   └── EmptyState.tsx           ListEmptyComponent з кнопкою «Скинути фільтр»
└── screens/CatalogScreen.tsx    Header + Chips + FlatList + RefreshControl
```

