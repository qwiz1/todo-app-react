import { Outlet } from 'react-router-dom';
import { Header } from 'src/components/header';

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Homepage;
