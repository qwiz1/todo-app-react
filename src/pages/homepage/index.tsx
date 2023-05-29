import { Outlet } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <main>
      <div>Homepage</div>
      <Outlet />
    </main>
  );
};

export default Homepage;
