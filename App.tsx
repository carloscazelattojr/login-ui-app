import { StatusBar } from 'expo-status-bar';
import { AppRoutes } from './src/screns/routes/AppRoutes';

export default function App() {
  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  );
}

