import { SafeAreaProvider } from 'react-native-safe-area-context';

import CatalogScreen from './src/screens/CatalogScreen';
import { ThemeProvider } from './src/theme/ThemeProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <CatalogScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
