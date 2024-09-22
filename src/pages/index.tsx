import LeftColumn from '@/components/LeftColumn/LeftColumn';
import RightColumn from '@/components/RightColumn/RightColumn';
import Header from '../components/Header/HeaderMain';
import RightColumnNovo from '../components/RightColumnNovo/RightColumnNovo';
import LeftColumnNovo from '../components/LeftColumnNovo';
import Main from '../components/Main/Main';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <LeftColumnNovo />
      <RightColumnNovo />
      <Main />
    </div>
  );
};

export default Home;
