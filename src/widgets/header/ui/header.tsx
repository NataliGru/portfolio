import { DesktopNavigation } from './desktop-navigation';
import { HeaderContainer } from './header-container';
import { MobileNavigation } from './mobile-navigation';

export const Header = () => {
  return (
    <HeaderContainer>
      <MobileNavigation />

      <DesktopNavigation />
    </HeaderContainer>
  );
};
