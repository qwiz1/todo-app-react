import { Link } from 'react-router-dom';
import { MediumButton } from '../styled-components/button';
import { Navigation, NavigationList, StyledHeader } from './header.styled';
import { AppRoute } from 'src/common/enums';

const Header = () => {
  return (
    <StyledHeader>
      <Navigation className="headerNavigation">
        <NavigationList>
          <li>
            <MediumButton>Add Todo</MediumButton>
          </li>
          <li>
            <Link to={AppRoute.PROFILE_$USERNAME}>
              <MediumButton>My Profile</MediumButton>
            </Link>
          </li>
        </NavigationList>
      </Navigation>
    </StyledHeader>
  );
};

export { Header };
