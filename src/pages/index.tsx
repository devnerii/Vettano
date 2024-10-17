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
      {/* <title>Vettano - Jogo de Desenho Online</title>
      <meta name="description" content="Desafie seus amigos no Vettano, o jogo de desenho online com modos clássicos e rápidos. Participe do rank e seja o melhor!" />
      <meta property="og:title" content="Vettano - Jogos de Desenho Online" />
      <meta property="og:description" content="Desafie seus amigos no Vettano, o jogo de desenho online com modos clássicos e rápidos. Participe do rank e seja o melhor!" />
      <meta property="og:image" content="/assets/img/og-image.png" />
      <meta property="og:url" content="https://vettano.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vettano - Jogos de Desenho Online" />
      <meta name="twitter:description" content="Desafie seus amigos no Vettano, o jogo de desenho online com modos clássicos e rápidos. Participe do rank e seja o melhor!" />
      <meta name="twitter:image" content="/assets/img/og-image.png" /> */}
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
