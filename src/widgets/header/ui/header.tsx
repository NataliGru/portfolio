import { DesktopNavigation } from './desktop-navigation';
import { HeaderContainer } from './header-container';
import { LogoLink } from './logo-link';
import { MobileNavigation } from './mobile-navigation';

export const Header = () => {
  return (
    <HeaderContainer>
      <MobileNavigation />

      <DesktopNavigation />
    </HeaderContainer>
  );
};
