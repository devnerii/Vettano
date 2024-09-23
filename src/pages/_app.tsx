import '../styles/globals.css'; // Ajuste o caminho conforme necessário
import '../components/styles/scrollbar.css';
import '../components/Header/styles/Header.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
