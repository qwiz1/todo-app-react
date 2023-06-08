import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MediumButton } from '../styled-components/button';
import { Navigation, NavigationList, StyledHeader } from './header.styled';
import { AppRoute } from 'src/common/enums';
import { AddTodoPopup } from '../add-todo-popup';

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible((isVisible) => !isVisible);
  };

  return (
    <>
      <StyledHeader>
        <Navigation className="headerNavigation">
          <NavigationList>
            <li>
              <MediumButton onClick={toggleModal}>Add Todo</MediumButton>
            </li>
            <li>
              <Link to={AppRoute.PROFILE_$USERNAME}>
                <MediumButton>My Profile</MediumButton>
              </Link>
            </li>
          </NavigationList>
        </Navigation>
      </StyledHeader>
      <AddTodoPopup
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </>
  );
};

export { Header };
