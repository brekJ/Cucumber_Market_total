import { NavigationContainer } from '@react-navigation/native';
import ScreenStack from './ScreenStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  );
};

export default Navigation;
