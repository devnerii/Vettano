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
      <Main 
        leftTargetDate="2024-12-23T00:00:00-03:00" 
        rightTargetDate="2024-12-25T00:00:00-03:00" 
      />
    </div>
  );
};

export default Home;
